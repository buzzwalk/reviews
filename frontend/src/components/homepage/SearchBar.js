import React, { useState } from "react";
import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { Search2Icon as SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({ handler }) {
    const [ value, setValue ] = useState("");

    return (
        <form onSubmit={handler}>
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon color="gray.300"></SearchIcon>
                </InputLeftElement>
                <Input
                 onChange={(e)=> setValue(e.target.value)}
                background="#333333" borderColor="#333333" type="text" ></Input>
            </InputGroup>
        </form>
    );
}