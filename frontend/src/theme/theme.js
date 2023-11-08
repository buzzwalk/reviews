import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        color: "#E8D79A",
        bg: "#222222"
      }
    }),
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: '#e8d79a',
      }
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
})

export default theme