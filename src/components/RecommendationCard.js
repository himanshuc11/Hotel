import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RecommendationCard({
  id,
  country,
  rating,
  primary_image,
  name,
  description,
  price,
}) {
  return (
    <Box
      width={'xs'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="1rem"
    >
      <Link to={`/details/${id}`}>
        <Image src={primary_image} alt={`Image of ${name}`} />

        <Box p="4">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {country}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {rating.toFixed(2)} rating
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>

          <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / day
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default RecommendationCard;
