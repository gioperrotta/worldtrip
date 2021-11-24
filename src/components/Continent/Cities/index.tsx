import React from "react";
import { Grid, Heading } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface CitiesProps {
  cities: {
    cityImage: string,
    cityName: string,
    countryName: string,
    flagCountryImage: string,
  }[]
}

export function Cities( { cities }: CitiesProps) {
  return (
    <>
      <Heading mb="10" fontWeight="500" fontSize={["2xl","4xl"]}>
        Cidades + 100
      </Heading>
      <Grid 
        templateColumns={["1fr", "1fr", "repeat(3,1fr)", "repeat(4,1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", 0]}
      >
        {cities.map((city, index) => (
        <CityCard 
          key = {index}
          cityImage={city.cityImage}
          cityName={city.cityName}
          countryName= {city.countryName}
          flagCountryImage={city.flagCountryImage}
        />
 
        ))}
     </Grid>
    </>
  );
}