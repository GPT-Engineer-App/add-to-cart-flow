import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, Link as RouterLink, Image, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
  };

  return (
    <Box p={4} position="relative" minHeight="100vh">
      <Heading mb={4}>Checkout</Heading>
      <VStack spacing={4} align="stretch">
        {cart.map((item, index) => (
          <Flex key={index} justify="space-between" w="100%" p={4} borderWidth={1} borderRadius="md">
            <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </Flex>
        ))}
      </VStack>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={formData.address} onChange={handleChange} />
          </FormControl>
          <FormControl id="cardNumber" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
          </FormControl>
        </VStack>
        <Flex position="absolute" bottom={4} left={0} right={0} justifyContent="center" gap={4}>
          <Button type="submit" colorScheme="teal">
            Place Order
          </Button>
          <Button as={RouterLink} to="/items" colorScheme="teal">
            Add More Items
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Checkout;