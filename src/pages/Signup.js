import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Link, Checkbox, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    navigate('/signup-success');
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
      <Box w="50%" p={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          Sign up
        </Text>
        <Text mb={4}>
          New bidders, as soon as you have submitted your information you will be eligible to bid in the auction.
        </Text>
        <form onSubmit={handleSignup}>
          <Stack spacing={4}>
            <FormControl id="first-name" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <Text color="red.500" fontSize="sm">Password criteria check</Text>
            </FormControl>
            <Checkbox defaultChecked>Receive outbid emails</Checkbox>
            <Button type="submit" colorScheme="blue" size="lg">
              Submit
            </Button>
          </Stack>
        </form>
        {/* <Text mt={4}>
          or sign up with
        </Text>
        <Button colorScheme="gray" size="lg" w="full" mt={2}>Google</Button>
        <Button colorScheme="gray" size="lg" w="full" mt={2}>Apple</Button>
        <Button colorScheme="gray" size="lg" w="full" mt={2}>Facebook</Button>
        <Text mt={4}>
          Want to know more? <Link href="#">Auction rules</Link>
        </Text> */}
      </Box>
      <Box w="50%" display={{ base: 'none', md: 'block' }}>
        <Image src="https://via.placeholder.com/600x400" alt="Signup Illustration" />
      </Box>
    </Box>
  );
};

export default Signup;