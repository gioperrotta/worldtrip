import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ContinentSlide } from './ContinentSlide'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

type ContinentProps = {
  imageUrl: string;
  linkUrl: string;
  linkTitle: string;
  linkSubTitle: string;
}
interface SliderProps {
  continents :ContinentProps[];
}


export function Slider( {continents} : SliderProps) {
  return (
     <Flex w="100%" h={["250px", "450px"]} mx="auto" maxW="1240px" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.linkUrl}>
            <ContinentSlide
              imageUrl={continent.imageUrl} 
              linkUrl={continent.linkUrl}
              linkTitle={continent.linkTitle}
              linkSubTitle={continent.linkSubTitle}
            /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}

