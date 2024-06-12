import { Box, Button, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
  });

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
    <Box p={4}>
      <Heading mb={4}>Checkout</Heading>
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
          <Button type="submit" colorScheme="teal">
            Place Order
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Checkout;