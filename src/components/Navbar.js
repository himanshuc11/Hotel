import { Box, Input, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const flexDisplay = useBreakpointValue({
    base: 'column',
    sm: 'column',
    md: 'row',
    lg: 'row',
    xl: 'row',
    '2xl': 'row',
  });

  return (
    <Box as="nav" background={'#003580'} color={'white'} p={'1rem'}>
      <Flex
        flexDirection={flexDisplay}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link to="/">
          <Box as="h1" fontFamily={'cursive'} fontSize={'2rem'} m={'1rem'}>
            Hotel.com
          </Box>
        </Link>

        <ButtonGroup>
          <Link to="/login">
            <Button
              background={'white'}
              color={'#003580'}
              height={'3rem'}
              m={'1rem'}
            >
              Sign In
            </Button>
          </Link>

          <Link to="register">
            <Button
              background={'white'}
              color={'#003580'}
              height={'3rem'}
              m={'1rem'}
            >
              Sign Up
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
