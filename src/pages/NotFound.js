import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

function NotFound() {
  return (
    <Flex height={'100%'} justify={'center'} alignItems={'center'}>
      <Box fontSize={'5rem'}>404 Not Found</Box>
    </Flex>
  );
}

export default NotFound;
