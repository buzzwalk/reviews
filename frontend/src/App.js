import React, { useEffect, useState } from 'react'

import { Box, Heading, ChakraProvider, Stack, HStack, Button, Divider, InputGroup, InputRightElement, Select } from '@chakra-ui/react'
import SearchBar from './components/homepage/SearchBar'

import Header from './components/Header'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import algoliasearch from 'algoliasearch/lite';
import CoolSearchBar from './components/CoolSearchbar';
import { Link } from 'react-router-dom';
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

const App = () => {
  const submitHandler = e => {
    e.preventDefault()
  }

  const [search, setSearch] = useState(' ');
    
    const [suggested, setSuggested] = useState(null)
    const [reviewable, setReviewable] = useState('classes');
   
    
    useEffect(() => {
        let index = 0;
        searchClient.initIndex(reviewable).search(search).then(({hits}) =>{
            setSuggested(hits)
        })
    }, [search, reviewable])

  return (
    <>
      <Header />

      <Box style={{
        width: "100%",
        height: "fit-content",
        height: "70vh",
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
            <HStack width="100%" style={{position:"relative", zIndex:"10"}} >
                <CoolSearchBar />
            </HStack>
          </Box>
          <Divider color="#B9B08F" marginBottom={"25px"} marginTop="25px"></Divider>
          <Box marginTop = "10px" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "center"
          }}>
              <Link to='/classes'>
                <Button >
                  Classes
                </Button>
              </Link>
              <Link to='/professors'>
                <Button>
                  Professors
                </Button>
              </Link>
              <Link to='/apartments'>
                <Button>
                  Housing
                </Button>
              </Link>
              <Link to='/dininghalls'>
                <Button>
                  Dining Halls
                </Button>
              </Link>
            
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App