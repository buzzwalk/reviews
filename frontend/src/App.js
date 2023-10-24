import React from 'react'

import { Box, Heading, ChakraProvider } from '@chakra-ui/react'
import SearchBar from './components/homepage/SearchBar'

import Header from './components/Header'

const App = () => {
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <ChakraProvider>
      <Header />

      <Box style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
      }}>
        <Box style={{
          width: "50%",
          height: "50%",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}>
          <Box style={{
            width: "100%"
          }}>
            <Heading style={{fontSize: "3em"}}>
            GT Reviews
            </Heading>
            <SearchBar handler={submitHandler} />
          </Box>

          <Box style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
            <Box>
              <p>Classes</p>
            </Box>

            <Box>
              <p>Professors</p>
            </Box>

            <Box>
              <p>Apartments</p>
            </Box>

            <Box>
              <p>Dining Halls</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
