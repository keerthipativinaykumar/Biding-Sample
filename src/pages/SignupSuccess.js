import React, { useEffect } from 'react';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SignupSuccess = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2500); // Auto navigate to home after 5 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [navigate]);

  return (
    <Box textAlign="center" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Uncover Deals, Unleash Excitement: <Text as="span" color="blue.500">Dive into Our Auctions Today!</Text>
      </Text>
      <Text fontSize="xl" color="green.500" mb={6}>
        SIGNED UP SUCCESSFULLY!
      </Text>
      <Flex justifyContent="center" mb={6}>
        <Image src="https://via.placeholder.com/600x400" alt="Success" />
      </Flex>
      <Button as={RouterLink} to="/login" colorScheme="blue">
        Login now
      </Button>
    </Box>
  );
};

export default SignupSuccess;