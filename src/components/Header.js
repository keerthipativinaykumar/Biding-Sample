import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="pink.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">Genix Auctions</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" p={2}>
          Auctions
        </Link>
        <Link as={RouterLink} to="/login" p={2}>
          Login
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;