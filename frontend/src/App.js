import React from 'react'
import { Link } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <header className='App-header'>
        <Link to='/review'>Add review</Link>
      </header>
    </ChakraProvider>
  )
}

export default App
