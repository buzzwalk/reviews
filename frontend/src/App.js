import React from 'react'

import { Box, Heading, ChakraProvider } from '@chakra-ui/react'
import SearchBar from './components/homepage/SearchBar'

import Header from './components/Header'

const App = () => {
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <>
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
              <a href='/classes'>Classes</a>
            </Box>

            <Box>
              <a href='/professors'>Professors</a>
            </Box>

            <Box>
              <a href='/apartments'>Apartments</a>
            </Box>

            <Box>
              <a href='/dininghalls'>Dining Halls</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
