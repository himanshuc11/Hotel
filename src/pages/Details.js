import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import useFetch from '../Hooks/useFetch';
import { Flex, Box } from '@chakra-ui/react';
import HotelDetails from '../components/HotelDetails';

function Details() {
  let params = useParams();
  let [hotelData, error, loading] = useFetch(`/api/hotel/${params.hotelId}`);

  return (
    <Flex flexDir={'column'} height={'100%'}>
      {loading ? (
        <Flex height={'100%'} justify={'center'} alignItems={'center'}>
          <Loader />
        </Flex>
      ) : (
        <HotelDetails hotel={hotelData.hotel} />
      )}
    </Flex>
  );
}

export default Details;
