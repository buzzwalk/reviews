import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    brand: {
      50:"#E8D79A",
      100:"#E8D79A",
      500: "#E8D79A"
    }
  },
  styles: {
    global: props => ({
      body: {
        
        bg: "#222222"
      }
    }),
  },
  fonts: {
    heading: `'newsreader', sans-serif`,
    body: `'Inter', sans-serif`
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
  },
  
})

export default theme