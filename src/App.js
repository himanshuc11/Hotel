import React, { useState, createContext } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Details from './pages/Details';
import { Flex } from '@chakra-ui/react';

import app from './settings/firebaseConfig';
import NotFound from './pages/NotFound';

// Server
import { makeServer } from './server/server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

export const userContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <userContext.Provider value={[user, setUser]}>
        <Flex flexDir={'column'} height={'100vh'}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/details/:hotelId" element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Flex>
      </userContext.Provider>
    </ChakraProvider>
  );
}

export default App;
