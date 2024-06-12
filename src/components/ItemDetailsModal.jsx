import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Image, Flex } from "@chakra-ui/react";

const ItemDetailsModal = ({ isOpen, onClose, item, addToCart }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={item.image} alt={item.name} mb={2} />
          <Text>Price: ${item.price}</Text>
          <Text>Description: {item.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="center" gap={4}>
            <Button colorScheme="teal" onClick={() => { addToCart(item); onClose(); }}>
              Add to Cart
            </Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemDetailsModal;