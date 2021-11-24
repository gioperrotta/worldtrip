import React from "react";
import { Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { TravelType } from './TravelType'

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      justifyContent="space-between"
      align="center"
      w="100%"
      maxWidth="1160px"
      mt={["10", "32"]}
      mx="auto"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType icon="/images/Application/TravelTypes/cocktail.svg" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="/images/Application/TravelTypes/surf.svg" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="/images/Application/TravelTypes/building.svg" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="/images/Application/TravelTypes/museum.svg" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon="/images/Application/TravelTypes/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>
  );
}