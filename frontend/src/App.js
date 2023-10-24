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
<<<<<<< HEAD
        <SearchBar />
        <NavBar />
=======
        {/* <SearchBar /> */}
>>>>>>> 22a3f304d832ba52b4ab6a634d6445ec9c4140fd
      </header>
    </ChakraProvider>
  )
}

export default App
