import React, { useState } from "react";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon as SearchIcon } from "@chakra-ui/icons";
import "./landing.css"
export default function SearchBar() {
    const [ value, setValue ] = useState("");

    return (
        <form action="/" method="POST" id="searchbar">
            <InputGroup size="md">
                <Input
                    color="black" 
                    type="text" 
                    id="search" 
                    name="search" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    size="lg"
                />
                <InputRightElement>
                    <button type="submit">
                        <SearchIcon color="black" />
                    </button>
                </InputRightElement>
            </InputGroup>
        </form>
    );
}