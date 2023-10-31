import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
})

export default theme