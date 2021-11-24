import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface CityCardProps {
  cityImage: string;
  flagCountryImage: string;
  cityName: string;
  countryName: string;
}

export function CityCard({
  cityImage,
  flagCountryImage,
  cityName,
  countryName
}: CityCardProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image h="170px" w="100%" src={cityImage} />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="600">{cityName}</Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="grey.500" >{countryName}</Text>
        </Flex>
        <Image
          w="12"
          h="12"
          borderRadius="50%"
          src={flagCountryImage}
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}