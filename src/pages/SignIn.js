import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { userContext } from '../App';

function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const toast = useToast();
  const [user, setUser] = useContext(userContext);

  const handleChange = e => {
    const newFormData = { ...form };
    newFormData[`${e.target.name}`] = e.target.value;
    setForm(newFormData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, form.email, form.password)
    //   .then(userCredential => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error);
    //   });

    if (form.email === 'abc@gmail.com' && form.password === 'abcdef') {
      setUser({ email: form.email });
      toast({
        position: 'top-right',
        title: 'Signed In.',
        description: 'You have signed in successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="green.500">
            You have logged In
          </Box>
        ),
      });
    } else {
      toast({
        position: 'top-right',
        title: 'Wrong Email Or Password.',
        description: 'Wrong Email or password',
        status: 'failure',
        duration: 1000,
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Wrong Email or password
          </Box>
        ),
      });
    }
  };

  return (
    <>
      <FormControl isRequired p={'2rem'}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired p={'2rem'}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <FormHelperText>Enter your password</FormHelperText>
      </FormControl>

      <Button
        m={'2rem'}
        background={'#003580'}
        color={'white'}
        _hover={{ color: 'black', background: 'grey' }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </>
  );
}

export default SignIn;
