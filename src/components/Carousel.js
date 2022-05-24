import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import Slider from 'react-slick';

function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    useCSS: false,
    useTransform: false,
  };

  const imagesJSX = images.map((image, idx) => {
    return (
      <Box as="div" key={uuidv4()} width={'100%'} height={'300px'}>
        <Image
          src={image}
          height={'inherit'}
          width={'inherit'}
          alt={`Carousel Image ${idx}`}
        ></Image>
      </Box>
    );
  });

  return <Slider {...settings}>{imagesJSX}</Slider>;
}

export default Carousel;
