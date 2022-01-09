import '@chakra-ui/react'
import { theme } from './primary'

export type Theme = typeof theme

declare module '@chakra-ui/react' {
  export interface DefaultTheme extends Theme {}
}
