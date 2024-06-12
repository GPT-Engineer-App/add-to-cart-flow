import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text } from "@chakra-ui/react";

const ItemDetailsModal = ({ isOpen, onClose, item, addToCart }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Price: ${item.price}</Text>
          <Text>Description: {item.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={() => { addToCart(item); onClose(); }}>
            Add to Cart
          </Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemDetailsModal;