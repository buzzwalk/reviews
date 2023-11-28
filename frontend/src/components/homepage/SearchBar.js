import React, { useEffect, useState } from "react";
import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { Search2Icon as SearchIcon } from "@chakra-ui/icons";
import { InstantSearch, connectSearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const algoliaClient = algoliasearch('KL9ZND53TD', 'a242fe2358be4a9ea6a99c4454421d5e');
const indexName = 'DiningHalls'

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <Input
    type="text"
    id="search"
    name="search"
    value={currentRefinement}
    onChange={(e) => refine(e.target.value)}
    size="lg"
    style={{
      color: "white",
      backgroundColor: "#54585A"
    }}
  />
));

export default function SearchBar({ handler }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const response = await algoliaClient.search(results);
        if (response.hits && Array.isArray(response.hits)) {
          setResults(response.hits);
        } else {
          console.error('Algolia response does not contain an array of hits:', response);
          setResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    search();
  }, [results]);

  return (
    <InstantSearch searchClient={algoliaClient} indexName={indexName}>
      <form onSubmit={handler}>
        <InputGroup size="md">
          <SearchBox />
          <InputLeftElement>
          </InputLeftElement>
        </InputGroup>
      </form>
      <Hits hitComponent={({ hit }) => <div>{hit.name}</div>} />
    </InstantSearch>
  );
}