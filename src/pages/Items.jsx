import { Box, Button, Flex, Heading, Text, VStack, Input, Grid, GridItem, useDisclosure, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import ItemDetailsModal from "../components/ItemDetailsModal.jsx";
import { useState } from "react";

const Items = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10, image: "/images/placeholder.png" },
    { id: 2, name: "Item 2", price: 20, image: "/images/placeholder.png" },
    { id: 3, name: "Item 3", price: 30, image: "/images/placeholder.png" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Items</Heading>
      <Flex mb={4}>
        <Input
          placeholder="Search items"
          value={searchQuery}
          onChange={handleSearchChange}
          mr={2}
        />
        <Button leftIcon={<FaSearch />} colorScheme="teal">Search</Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {filteredItems.map((item) => (
          <GridItem key={item.id} p={4} borderWidth={1} borderRadius="md" onClick={() => handleItemClick(item)}>
            <Image src={item.image} alt={item.name} mb={2} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button colorScheme="teal" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </GridItem>
        ))}
      </Grid>
      {selectedItem && (
        <ItemDetailsModal isOpen={isOpen} onClose={onClose} item={selectedItem} addToCart={addToCart} />
      )}
    </Box>
  );
};

export default Items;