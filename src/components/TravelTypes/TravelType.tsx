import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'

interface TravelTypeProps {
  icon: string;
  text: string;
}

export function TravelType({icon, text}: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false
  });

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      {!isMobile ?  
      <Image
        src={icon}
        alt={text}
        w="85px"
        h="85px"
        mb="6"
      /> : 
      <Text 
        color="yellow.400"
        fontSize="4xl"
        mr="2"
      >
        •
      </Text>}

      <Text
        fontWeight="600"
        color= "gray.700"
        fontSize={["md", "xl", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  );
}