import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  imageUrl: string;
  linkTitle: string;
  linkSubTitle: string;
  linkUrl: string;
}

export function ContinentSlide({ imageUrl, linkTitle, linkSubTitle, linkUrl }: SlideProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      bgImage={imageUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
      bgPosition="center"
    >
      <Link href={linkUrl}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {linkTitle}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.50"  ///"gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {linkSubTitle}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}