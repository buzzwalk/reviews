import React from 'react'
import { Link } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import SearchBar from './components/homepage/SearchBar'
import NavBar from './components/homepage/NavBar'

const App = () => {
  return (
    <ChakraProvider>
      <header className='App-header'>
        <Link to='/review'>Add review</Link>
        <SearchBar />
        <NavBar />
      </header>
    </ChakraProvider>
  )
}

export default App
