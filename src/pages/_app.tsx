import '../../styles/global.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../themes/primary'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  )
}
export default MyApp
