import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CatalogItem = ({ id, title, imageUrl, currentBid }) => {
  return (
    <Box as={RouterLink} to={`/bid/${id}`} p={4} borderWidth="1px" borderRadius="md" overflow="hidden" _hover={{ shadow: 'md' }}>
      <Image src={imageUrl} alt={title} />
      <Text mt={2} fontWeight="bold" fontSize="xl">{title}</Text>
      <Text>Current Bid: ${currentBid}</Text>
    </Box>
  );
};

export default CatalogItem;