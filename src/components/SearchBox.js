import React, { useState } from 'react';
import { Box, Flex, Input, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

function SearchBox({
  query,
  setQuery,
  countries,
  setCountries,
  ratings,
  setRatings,
}) {
  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleCountryChange = country => {
    setCountries(countries => {
      let newCountries = { ...countries };
      newCountries[`${country}`] = !newCountries[`${country}`];
      return newCountries;
    });
  };

  const handleRatingsChange = rating => {
    setRatings(ratings => {
      let newRatings = { ...ratings };
      newRatings[`${rating}`] = !newRatings[`${rating}`];
      return newRatings;
    });
  };

  const countryNames = Object.keys(countries);
  const countryCheckBoxes = countryNames.map(country => {
    return (
      <Checkbox
        defaultChecked={countries[country]}
        colorScheme={'facebook'}
        margin={'0.25rem'}
        onChange={e => handleCountryChange(country)}
        key={uuidv4()}
      >
        {country.toLocaleUpperCase()}
      </Checkbox>
    );
  });

  const ratingKeys = Object.keys(ratings);
  const ratingsCheckBoxes = ratingKeys.map(rating => {
    return (
      <Checkbox
        defaultChecked={ratings[rating]}
        colorScheme={'facebook'}
        margin={'0.25rem'}
        key={uuidv4()}
        onChange={e => handleRatingsChange(rating)}
      >
        {rating}
      </Checkbox>
    );
  });

  return (
    <Box m={'1rem'} p={'1rem'}>
      <Box background="#febb02" height={'inherit'} width={'max-content'}>
        <Flex flexDir={'column'} justifyContent={'center'} padding={'1rem'}>
          <Box m={'0.5rem'} fontSize={'1.5rem'}>
            Search By Hotel Name
          </Box>
          <Box m={'0.5rem'}>
            <Input
              placeholder="Taj Hotel"
              background={'white'}
              value={query}
              onChange={handleQueryChange}
            ></Input>
          </Box>

          <Box m={'0.5rem'} fontSize={'1.5rem'}>
            Filter By Country
          </Box>

          <Box m={'0.5rem'}>
            <CheckboxGroup>{countryCheckBoxes}</CheckboxGroup>
          </Box>

          <Box m={'0.5rem'} fontSize={'1.5rem'}>
            Filter By Rating
          </Box>

          <Box m={'0.5rem'}>
            <CheckboxGroup>{ratingsCheckBoxes}</CheckboxGroup>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default SearchBox;
