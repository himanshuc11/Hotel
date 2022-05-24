import React from 'react';
import { Flex } from '@chakra-ui/react';
import RecommendationCard from './RecommendationCard';
import { v4 as uuidv4 } from 'uuid';

function RecommendationList({ hotels }) {
  const requiredHotels = hotels;

  return (
    <Flex flexWrap={'wrap'} alignItems={'center'} justify={'center'}>
      {requiredHotels.map(hotel => {
        return (
          <RecommendationCard {...hotel} key={uuidv4()}></RecommendationCard>
        );
      })}
    </Flex>
  );
}

export default RecommendationList;
