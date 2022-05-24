import { Box, Flex, Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import Carousel from '../components/Carousel';
import Calendar from './Calendar';
import { Tooltip } from '@chakra-ui/react';

import { userContext } from '../App';

function HotelDetails({ hotel }) {
  const [user, setUser] = useContext(userContext);

  const [datesOnCalendar, setDatesOnCalendar] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const hotelDescription = hotel.description.reduce(
    (currentDescription, description) => {
      return currentDescription + description;
    },
    ''
  );

  const dateObjectsReturnedByAPI = hotel.availablity.filter(h => {
    let key = Object.keys(h);
    return !h[key];
  });

  const ISODatesNotAllowed = dateObjectsReturnedByAPI.map(date => {
    let key = Object.keys(date);
    return key[0];
  });

  const disabledDatesObjects = ISODatesNotAllowed.map(date => {
    return new Date(date);
  });

  const handleBooking = () => {
    localStorage.setItem(
      'book',
      JSON.stringify({
        user: user.email,
        from: datesOnCalendar[0].startDate,
        to: datesOnCalendar[0].endDate,
      })
    );
  };

  return (
    <Box>
      <Flex align={'center'} justify="space-around">
        <Calendar
          disabledDates={disabledDatesObjects}
          datesOnCalendar={datesOnCalendar}
          setDatesOnCalendar={setDatesOnCalendar}
        />
        {user === null ? (
          <Tooltip label="You need to be logged in to book">Book Now</Tooltip>
        ) : (
          <Button size={'lg'} onClick={handleBooking}>
            Book Now
          </Button>
        )}
      </Flex>
      <Box m={'0.5rem'} fontSize={'2rem'} textAlign={'center'}>
        {hotel.name}
      </Box>

      <Box m={'1rem'} fontSize={'2rem'} textAlign={'center'}>
        Only at {hotel.price} / day
      </Box>

      <Box m={'0.5rem'} textAlign={'center'}>
        {hotel.address}, {hotel.country}
      </Box>

      <Box m={'1rem'} marginX="2rem">
        <Carousel images={hotel.images} />
      </Box>

      <Box m={'1rem'}>{hotelDescription}</Box>
    </Box>
  );
}

export default HotelDetails;
