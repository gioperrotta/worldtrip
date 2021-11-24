import { Flex, Link, Icon, Image, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri'


export function Header () {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      width= "100%"
      height={["12","24"]}
      mx="auto"
      mt="2"
      px="4"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link
            href="/"
          >
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
            </a>
          </Link>

        )}

        <Image
          w={["80px", "184px"]}
          src="/images/Application/logo.svg"
          alt="World Trip"
          justifySelf="center"
          gridColumn="2"
          
        />
      </Grid>

    </Flex>

  );
}