import { Box, Button, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box p={4} position="relative" minHeight="100vh">
      <Heading mb={4}>Cart</Heading>
      <VStack spacing={4}>
        {cart.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          cart.map((item, index) => (
            <Flex key={index} justify="space-between" w="100%" p={4} borderWidth={1} borderRadius="md">
              <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <Button colorScheme="red" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </Flex>
          ))
        )}
      </VStack>
      {cart.length > 0 && (
        <Flex position="absolute" bottom={4} left={0} right={0} justifyContent="center">
          <Button as={RouterLink} to="/checkout" colorScheme="teal" mt={4}>
            Proceed to Checkout
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Cart;