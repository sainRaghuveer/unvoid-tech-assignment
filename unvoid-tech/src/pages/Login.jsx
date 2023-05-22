import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_SUCCESS } from '../Redux/Authentication/actionTypes';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, loginSuccessAction } from '../Redux/Authentication/action';

export default function Login() {

  const [username, setUsernam] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();

  const handleLogin = () => {
    let userData = {
      username: username,
      password: password
    };

    if (userData.username !== "" && userData.password !== "") {
      dispatch(loginSuccessAction(userData));
      // console.log(obj);
      navigate("/home");
      toast({
        title: `User logged in successful`,
        status: "success",
        isClosable: true,
        position: "top"
      })
    } else {
      navigate("/");
      toast({
        title: `Username or password can't be empty`,
        status: "error",
        isClosable: true,
        position: "top"
      })
    }

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      backgroundImage={""}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Heading fontSize={'4xl'}>Welcome to cartoon world</Heading>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} placeholder='Username' onChange={(e) => setUsernam(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} placeholder='Type your password' onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}