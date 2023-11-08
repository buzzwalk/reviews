import React, { useState } from "react";
import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { Search2Icon as SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({ handler }) {
    const [ value, setValue ] = useState("");

    return (
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
                <InputLeftElement>
                    <SearchIcon color="white" />
                </InputLeftElement>
            </InputGroup>
        </form>
    );
}