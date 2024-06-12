import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Items = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Items</Heading>
      <VStack spacing={4}>
        {items.map((item) => (
          <Flex key={item.id} justify="space-between" w="100%" p={4} borderWidth={1} borderRadius="md">
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button colorScheme="teal" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Items;