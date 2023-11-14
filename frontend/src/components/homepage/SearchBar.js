import React, { useEffect, useState } from "react";
import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { Search2Icon as SearchIcon } from "@chakra-ui/icons";
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const algoliaClient = algoliasearch('KL9ZND53TD', 'a242fe2358be4a9ea6a99c4454421d5e');
const indexName = 'Dorms';

export default function SearchBar({ handler }) {
    const [ value, setValue ] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
      const search = async () => {
        try {
          const response = await algoliaClient.search(value, { indexName });
          if (response.hits && Array.isArray(response.hits)) {
            setResults(response.hits);
          } else {
            console.error('Algolia response does not contain an array of hits:', response);
            setResults([]); // Set empty array as a fallback
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
    
      search();
    }, [value]);


    // return (
    //   <form onSubmit={handler}>
    //     <InputGroup size="md">
    //       <Input
    //         type="text"
    //         id="search"
    //         name="search"
    //         value={value}
    //         onChange={(e) => setValue(e.target.value)}
    //         size="lg"
    //         style={{
    //           color: "white",
    //           backgroundColor: "#54585A"
    //         }}
    //       />
    //       <InputLeftElement>
    //         <SearchIcon color="white" />
    //       </InputLeftElement>
    //     </InputGroup>
  
    //     {/* Display search results */}
    //     <div>
    //       {results.map((result) => (
    //         <div key={result.objectID}>{result.name}</div>
    //       ))}
    //     </div>
    //   </form>
    // );
          
    return (
        <InstantSearch searchClient={algoliaClient} indexName={indexName}>
          <form onSubmit={handler}>
            <InputGroup size="md">
                 <Input
                    type="text" 
                    id="search" 
                    name="search" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    size="lg"
                    style={{
                        color: "white",
                        backgroundColor: "#54585A"
                    }}
                />
                <SearchBox
                  translations={{
                    placeholder: 'Search...',
                  }}
                  className = "search"
                />
                <InputLeftElement>
                    <SearchIcon color="white" />
                </InputLeftElement>
            </InputGroup>
          </form>
          <Hits hitComponent={({ hit }) => <div>{hit.name}</div>} />
        </InstantSearch>
      );

    // return (
    //     <form onSubmit={handler}>
    //         <InputGroup size="md">
    //             <Input
    //                 type="text" 
    //                 id="search" 
    //                 name="search" 
    //                 value={value} 
    //                 onChange={(e) => setValue(e.target.value)}
    //                 size="lg"
    //                 style={{
    //                     color: "white",
    //                     backgroundColor: "#54585A"
    //                 }}
    //             />
    //             <InputLeftElement>
    //                 <SearchIcon color="white" />
    //             </InputLeftElement>
    //         </InputGroup>
    //     </form>
    // );
}