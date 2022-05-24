import { useEffect, useState } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';
import RecommendationList from '../components/RecommendationList';
import useFetch from '../Hooks/useFetch';
import Loader from '../components/Loader';

function Home() {
  const [hotels, error, loading] = useFetch('api/hotels');

  const viewData = useBreakpointValue({
    base: 'column',
    sm: 'column',
    md: 'row',
    lg: 'row',
    xl: 'row',
    '2xl': 'row',
  });

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState({
    india: true,
    australia: true,
    usa: true,
  });

  const [ratings, setRatings] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  function filteredHotels() {
    if (!hotels) return hotels;
    let filteredListOfHotels = JSON.parse(JSON.stringify(hotels.hotels));

    // Filter based on Query
    const hotelQuery = query.trim();
    if (hotelQuery !== '') {
      filteredListOfHotels = filteredListOfHotels.filter(hotel => {
        return hotel.name.includes(hotelQuery);
      });
    }

    // Filter based on Rating
    const allowedRating = new Set();
    const ratingKeys = Object.keys(ratings);
    for (let i = 0; i < ratingKeys.length; i++) {
      if (ratings[ratingKeys[i]]) {
        allowedRating.add(parseInt(ratingKeys[i]));
      }
    }
    filteredListOfHotels = filteredListOfHotels.filter(hotel => {
      let hotelRating = Math.round(hotel.rating);
      return allowedRating.has(hotelRating);
    });

    // Filter based on Country
    const allowedCountries = new Set();
    const countryKeys = Object.keys(countries);
    for (let i = 0; i < countryKeys.length; i++) {
      if (countries[countryKeys[i]]) {
        allowedCountries.add(countryKeys[i].toLocaleLowerCase());
      }
    }
    filteredListOfHotels = filteredListOfHotels.filter(hotel => {
      return allowedCountries.has(hotel.country.toLocaleLowerCase());
    });

    return filteredListOfHotels;
  }

  const renderHotels = filteredHotels();

  return (
    <Flex height={'100%'} p="1rem" flexDir={viewData} align={'center'}>
      <SearchBox
        query={query}
        setQuery={setQuery}
        countries={countries}
        setCountries={setCountries}
        ratings={ratings}
        setRatings={setRatings}
      ></SearchBox>

      {loading ? (
        <Box width={'100%'} textAlign="center">
          <Loader></Loader>
        </Box>
      ) : (
        <Box m={'2rem'} p={'1rem'} height={'md'}>
          <RecommendationList hotels={renderHotels}></RecommendationList>
        </Box>
      )}
    </Flex>
  );
}

export default Home;
