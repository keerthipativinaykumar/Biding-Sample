import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image, Stack, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const products = [
  { id: 0, name: 'Sony Black Headphones', minBid: 100, currentBid: 157, image: 'path_to_image', description: 'Product description goes here.' },
  { id: 1, title: 'Sony Black Headphones', minBid: 100, currentBid: 157, timeLeft: '1 day 12 hrs 43 minutes', image: 'path_to_image', live: true },
  { id: 2, title: 'Apple AirPod 2nd Gen', minBid: 80, currentBid: 95, timeLeft: '1 day 12 hrs 43 minutes', image: 'path_to_image', live: true },
  { id: 3, title: 'Mi 32 20000mAh Power Bank', minBid: 40, currentBid: 46, timeLeft: '1 day 12 hrs 43 minutes', image: 'path_to_image', live: true },
  { id: 4, title: 'Tribit Bluetooth Speaker', minBid: 10, currentBid: 15, timeLeft: '1 day 12 hrs 43 minutes', image: 'path_to_image', live: true },
  { id: 5, title: 'WiFi Security Camera', minBid: 100, currentBid: 157, timeLeft: '1 day 12 hrs 43 minutes', image: 'path_to_image', live: true },
];

const AuctionDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Button as={RouterLink} to="/">Back to catalog</Button>
      <Box mt={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.image} alt={product.name} />
        <Box p={4}>
          <Stack spacing={2}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>Minimum Bid: ${product.minBid}</Text>
            <Text>Current Bid: ${product.currentBid}</Text>
            <Text>{product.description}</Text>
            <Button colorScheme="blue">Bid Now</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AuctionDetails;