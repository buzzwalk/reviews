import { Button, ButtonGroup, HStack, Select, Stack, option, Checkbox, Input, TabList, Tab, Tabs, Text, TabPanel, TabPanels, Divider, Heading, InputGroup, InputRightElement, Flex, Box, VStack} from '@chakra-ui/react'
import PropTypes from "prop-types";
import theme from '../theme/theme';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import ReviewEditor from './ReviewEditor';
import Navbar from './navbar';
export default function AddReview() {
    const [reviewType, setReviewType] = useState(""); 
    console.log(reviewType);
    return (
        <>
        <Navbar></Navbar>
        <Box margin="20px">
            <Heading fontWeight={100} fontSize={55} color={"#B9B08F"} marginBottom={-1}>Review</Heading>
            <Divider marginBottom={"25px"}></Divider>
            {/* <Text>Select the category you want to submit a review for</Text> */}
            <Tabs variant="soft-rounded" colorScheme='brand' >
                <TabList >
                    <Stack direction={"horizontal"} spacing={5}>
                    <Tab marginLeft={0} width={150} fontWeight="Regular" textColor="#BBBBBB" background="#333333">Dining</Tab>
                    <Tab fontWeight="Regular" width={150} textColor="#BBBBBB" background="#333333">Housing</Tab>
                    <Tab fontWeight="Regular" width={150} textColor="#BBBBBB" background="#333333">Profs/Classes</Tab>

                    </Stack>
                                        
                </TabList>

                <TabPanels>

                    <TabPanel> {/*Dining*/}
                        <Stack spacing={5}>
                            <Stack>
                                <Text >Search for the Dining Hall below</Text>
                                <InputGroup width={"60vw"}>
                                    <InputRightElement>
                                        <SearchIcon color="gray.300"></SearchIcon>
                                    </InputRightElement>
                                    <Input background="#333333" borderColor="#333333" type="text" ></Input>
                                </InputGroup>
                            </Stack>
                         
                            <ReviewEditor></ReviewEditor>
                        </Stack>
                    </TabPanel>

                    <TabPanel> {/*Housing*/ }
                        <Stack spacing={5}>
                            <Stack>
                                <Text >Search for the Housing Building below</Text>
                                <InputGroup width={"60vw"}>
                                    <InputRightElement>
                                        <SearchIcon color="gray.300"></SearchIcon>
                                    </InputRightElement>
                                    <Input background="#333333" borderColor="#333333" type="text" ></Input>
                                </InputGroup>
                            </Stack>
                         
                            <ReviewEditor></ReviewEditor>
                        </Stack>
                    </TabPanel>
                    <TabPanel > {/*Profs/classes*/ }
                        <Stack spacing={5}>
                            <Stack>
                                <Text >Search for the Department Below</Text>
                                <InputGroup width={"60vw"}>
                                    <InputRightElement>
                                        <SearchIcon color="gray.300"></SearchIcon>
                                    </InputRightElement>
                                    <Input background="#333333" borderColor="#333333" type="text" ></Input>
                                </InputGroup>
                            </Stack>
                            
                            <Stack>
                                <Text>Search for the Course Below</Text>
                                <InputGroup width={"60vw"}>
                                    <InputRightElement>
                                        <SearchIcon color="gray.300"></SearchIcon>
                                    </InputRightElement>
                                    <Input background="#333333" borderColor="#333333" type="text" ></Input>
                                </InputGroup>
                            </Stack>
                            
                            <Stack>
                                <Text>Search for the Instructor Below</Text>
                                <InputGroup width={"60vw"}>
                                    <InputRightElement>
                                        <SearchIcon color="gray.300"></SearchIcon>
                                    </InputRightElement>
                                    <Input background="#333333" borderColor="#333333" type="text" ></Input>
                                </InputGroup>
                            </Stack>
                            
                            <HStack spacing={50}>
                                <HStack alignItems={"center"} spacing={5}>
                                    <Text width={125}>Semester Taken</Text>
                                    <Input background="#333333" borderColor="#333333" width= {100} type="Text"></Input>
                                </HStack>
                                <HStack alignItems={"center"} spacing={5}>
                                    <Text width={100}>Letter Grade</Text>
                                    <Select background="#333333" borderColor="#333333" width={70} textAlign="center">
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="F">F</option>
                                    </Select>
                                </HStack>
                            </HStack>
                            <ReviewEditor></ReviewEditor>
                        </Stack>
                    
                    </TabPanel>
                    

                </TabPanels>
            </Tabs>
            
        </Box>
        </>
        
        
    )
}