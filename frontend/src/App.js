import React from 'react'

import { Box, Heading, ChakraProvider, Stack, HStack, Button, Divider } from '@chakra-ui/react'
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
        <Box maxHeight="25vh" style={{
          width: "50%",
          height: "50%",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          
        }}>
          <Box style={{
            width: "100%"
          }}>
            <Heading  color={"#B9B08F"} fontWeight={100} style={{fontSize: "5em", marginBottom: "0.1em"}}>
              GT Reviews
            </Heading>
            <SearchBar  handler={submitHandler} />
          </Box>
          <Divider color="#B9B08F" marginBottom={"25px"} marginTop="25px"></Divider>
          <Box marginTop = "10px" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "center"
          }}>
              <a href='/classes'>
                <Button >
                  Classes
                </Button>
              </a>
              <a href='/professors'>
                <Button>
                  Professors
                </Button>
              </a>
              <a href='/apartments'>
                <Button>
                  Apartments
                </Button>
              </a>
              <a href='/dininghalls'>
                <Button>
                  Dining Halls
                </Button>
              </a>
            
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App