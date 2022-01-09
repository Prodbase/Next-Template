import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'light'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    light: {
      white: '#fff',
      ice: '#F6F6F9'
    }
  }
}

export const theme = extendTheme(customTheme)
