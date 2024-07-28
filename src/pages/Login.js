import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Checkbox, Link, Image, Text, Stack, Divider, HStack } from '@chakra-ui/react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'hello@example.com' && password === 'password') {
      setError('');
      // Perform login action
    } else {
      setError('Please enter correct password');
    }
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="lg"
        width={{ base: '90%', md: '80%', lg: '50%' }}
        maxWidth="md"
      >
        <Stack spacing={4}>
          <Heading textAlign="center">Genix Auctions</Heading>
          <Heading as="h3" size="lg" textAlign="center">Login</Heading>
          <Text textAlign="center">Welcome back. Enter your credentials to access your account.</Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mt={4} isRequired isInvalid={error}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Link color="blue.500" mt={2} display="block">Forgot Password?</Link>
            <Checkbox mt={4} defaultIsChecked>Keep me signed in</Checkbox>
            <Button type="submit" colorScheme="blue" width="full" mt={4}>Continue</Button>
          </form>
          <Text textAlign="center" my={2}>or sign up with</Text>
          <HStack spacing={4} justify="center">
            <Button colorScheme="red" leftIcon={<FaGoogle />}>Google</Button>
            <Button colorScheme="gray" leftIcon={<FaApple />}>Apple</Button>
            <Button colorScheme="blue" leftIcon={<FaFacebook />}>Facebook</Button>
          </HStack>
          <Divider my={4} />
          <Text textAlign="center">Don't have an Account? <Link as={RouterLink} to="/signup" color="blue.500">Sign up here</Link></Text>
        </Stack>
      </Box>
      <Box display={{ base: 'none', lg: 'block' }} ml={10}>
        <Image src="path_to_your_image" alt="Login Illustration" />
      </Box>
    </Flex>
  );
}

export default Login;