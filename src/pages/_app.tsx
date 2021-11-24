import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/components/navigation/navigation.scss'; // Navigation module
import 'swiper/components/pagination/pagination.scss'; // Pagination module

import '../styles/slider.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={ theme } >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
