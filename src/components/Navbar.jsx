import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
          Home
        </Link>
        <Flex>
          <Link as={RouterLink} to="/items" color="white" mx={2}>
            Items
          </Link>
          <Link as={RouterLink} to="/cart" color="white" mx={2}>
            Cart
          </Link>
          <Link as={RouterLink} to="/checkout" color="white" mx={2}>
            Checkout
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;