import React from 'react'

import { Link } from 'react-router-dom'
import { Box } from "@chakra-ui/react"

const Header = () => {
    return (
        <header className='App-header' style={{
            width: "100%",
        }}>
            <Box style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1em 3em",
                gap: "2em"
            }}>
                <Link to='/review' style={{
                }}>
                    Add review
                </Link>
                <Link to='/' style={{
                }}>
                    Home
                </Link>
            </Box>
        </header>
    )
}

export default Header