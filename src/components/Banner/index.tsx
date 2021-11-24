import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export function Banner() {
  return (
    <Flex
      w="100%"
      mx="auto"
      h={["160px", "250px", "250px", "335px"]}
      bgImage="url('/images/Application/Banner/Background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
 //           fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
            fontSize={["lg", "3xl", "4xl"]}
          >
            5 continentes,<br />infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxWidth={["100%", "450px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={["300", "300", "300", "400px"]}
          display={["none", "none", "block"]}
          src="/images/Application/Banner/Airplane.png"
          alt="avião amarelo"
          transform="translatey(58px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}