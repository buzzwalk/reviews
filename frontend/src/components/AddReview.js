import { Button, ButtonGroup, HStack, Select, Stack, option, Checkbox, Input, TabList, Tab, Tabs, Text, TabPanel, TabPanels, Divider, Heading, InputGroup, InputRightElement, Flex, Box, VStack} from '@chakra-ui/react'
import PropTypes, { number } from "prop-types";
import theme from '../theme/theme';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import ReviewEditor from './ReviewEditor';
import Navbar from './navbar';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
  } from "@choc-ui/chakra-autocomplete";
import db from '../firebase';
import algoliasearch from 'algoliasearch/lite';
import { Timestamp, addDoc, collection, doc, updateDoc, runTransaction, setDoc } from 'firebase/firestore';
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

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
                        <Dining />
                    </TabPanel>

                    <TabPanel> {/*Housing*/ }
                        <Housing />
                    </TabPanel>
                    <TabPanel > {/*Profs/classes*/ }
                        <ProfClass />
                    </TabPanel>
                    

                </TabPanels>
            </Tabs>
            
        </Box>
        </>
        
        
    )
}

function Dining(){
    const [diningSearch, setDiningSearch] = useState('');
    const [diningQuery, setDiningQuery] = useState('');
    const [diningSuggested, setDiningSuggested] = useState(null)
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [submitting, setSubmitting] = useState(false)
    
    useEffect(() => {
        let index = 0;
        searchClient.initIndex("dining").search(diningSearch).then(({hits}) =>{
            setDiningSuggested(hits)
        })
    }, [diningSearch])
    console.log(diningQuery)
    async function handleSubmit(e){
        e.preventDefault();
        if(diningQuery === '' || rating === 0 || title === '' || text === '') {
            return;
        }
        
        const docRef = await addDoc(collection(db, "DiningHalls", diningQuery, "Reviews"), {
            title: title,
            reviewMessage: text,
            rating: rating,
            timestamp: Timestamp.fromDate(new Date()),
            votescore: 0,
        })
        const currDocRef = doc(db, "DiningHalls", diningQuery);
        try {
            await runTransaction(db, async(transaction) => {
                const currDoc = await transaction.get(currDocRef)
                if(currDoc.exists) {
                    var overallRating = currDoc.data().overallRating;
                    var numberReviews = currDoc.data().numberReviews;

                    if(overallRating == null) {
                        await setDoc(currDocRef, {overallRating: 0}, {merge: true}  )
                        overallRating = 0;
                    } 
                    if(numberReviews == null) {
                        await setDoc(currDocRef, {numberReviews: 0}, {merge: true}  )
                        console.log("null numrevs")
                        numberReviews = 0;
                    }
                    const newRating = ((overallRating * numberReviews) + rating) / (numberReviews+1)
                    numberReviews = numberReviews + 1;
                    transaction.update(currDocRef, { overallRating: newRating, numberReviews: numberReviews });
                } else {
                    throw "Doc DNE"
                }
            })
        } catch (e) {
            console.log(e)
        }
        location.reload();
    }

    return (
        <Stack spacing={5}>
            <Stack>
                <Text >Search for the Dining Hall below</Text>
                <AutoComplete width={"60vw"}>
                    <InputGroup width={"60vw"}>
                        <AutoCompleteInput width={"60vw"} background="#333333" variant="filled" onChange={(e)=>setDiningSearch(e.target.value)}/>
                        <InputRightElement>
                        <SearchIcon color="gray.300"></SearchIcon>
                        </InputRightElement>
                    </InputGroup>
                    <AutoCompleteList   style={{position: "relative", zIndex:"10", background: "#333333" }}>
                        {diningSuggested != null && diningSuggested.map((hit, cid) => (
                            <AutoCompleteItem 
                                value={hit.objectID}
                                onClick={(e)=>{setDiningQuery(e.target.outerText)}}
                                textTransform="capitalize">
                                {hit.objectID }
                            </AutoCompleteItem>
                            ))}
                    </AutoCompleteList>
                </AutoComplete>
            </Stack>
            
            <ReviewEditor rating={rating} setRating={setRating} setTitle={setTitle} setText={setText}></ReviewEditor>
            <Button onClick={(e)=>{handleSubmit(e); setSubmitting(true)}} isLoading={submitting} marginLeft={0} width={150} textColor="#BBBBBB" background="#333333" >Submit</Button>

        </Stack>
    )
}

function Housing(){
    const [housingSearch, setHousingSearch] = useState('');
    const [housingSuggested, setHousingSuggested] = useState(null)
    const [housingQuery, setHousingQuery] = useState('');
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [submitting, setSubmitting] = useState(false)
    
    console.log(housingSearch)
     useEffect(() => {
        let index = 0;
        searchClient.initIndex("dorms").search(housingSearch).then(({hits}) =>{
            setHousingSuggested(hits)
        })
    }, [housingSearch])

    async function handleSubmit(e){
        e.preventDefault();
        if(housingQuery === '' || rating === 0 || title === '' || text === '') {
            return;
        }
        const docRef = await addDoc(collection(db, "Dorms", housingQuery, "Reviews"), {
            title: title,
            reviewMessage: text,
            rating: rating,
            timestamp: Timestamp.fromDate(new Date()),
            votescore: 0,
            
        })
        
        const currDocRef = doc(db, "Dorms", housingQuery);
        try {
            await runTransaction(db, async(transaction) => {
                const currDoc = await transaction.get(currDocRef)
                if(currDoc.exists) {
                    var overallRating = currDoc.data().overallRating;
                    var numberReviews = currDoc.data().numberReviews;

                    if(overallRating == null) {
                        await setDoc(currDocRef, {overallRating: 0}, {merge: true}  )
                        overallRating = 0;
                    } 
                    if(numberReviews == null) {
                        await setDoc(currDocRef, {numberReviews: 0}, {merge: true}  )
                        console.log("null numrevs")
                        numberReviews = 0;
                    }
                    const newRating = ((overallRating * numberReviews) + rating) / (numberReviews+1)
                    numberReviews = numberReviews + 1;
                    transaction.update(currDocRef, { overallRating: newRating, numberReviews: numberReviews });
                } else {
                    throw "Doc DNE"
                }
            })
        } catch (e) {
            console.log(e)
        }
        location.reload();
    }
    return(
        <Stack spacing={5}>
            <Stack>
                <Text >Search for the Housing Building below</Text>
                <AutoComplete>
                    <InputGroup width={"60vw"}>
                        <AutoCompleteInput width={"60vw"} background="#333333" variant="filled" onChange={(e)=>setHousingSearch(e.target.value)}/>
                        <InputRightElement>
                        <SearchIcon color="gray.300"></SearchIcon>
                        </InputRightElement>
                    </InputGroup>
                    <AutoCompleteList style={{position: "relative", zIndex:"10", background: "#333333" }}>
                        {housingSuggested != null && housingSuggested.map((hit, cid) => (
                            <AutoCompleteItem 
                                value={hit.objectID}
                                onClick={(e)=>{setHousingQuery(e.target.outerText)}}
                                textTransform="capitalize">
                                {hit.objectID }
                            </AutoCompleteItem>
                            ))}
                    </AutoCompleteList>
                </AutoComplete>
            </Stack>
            
            <ReviewEditor rating={rating} setRating={setRating} setTitle={setTitle} setText={setText}></ReviewEditor>
            <Button onClick={(e)=>{handleSubmit(e); setSubmitting(true)}} isLoading={submitting} marginLeft={0} width={150} textColor="#BBBBBB" background="#333333" >Submit</Button>
        </Stack>
    )
}

function ProfClass(){
    const [classSearch, setClassSearch] = useState('');
    const [classSuggested, setClassSuggested] = useState(null)
    const [classQuery, setClassQuery] = useState('')

    const [profSearch, setProfSearch] = useState('')
    const [profSuggested, setProfSuggested] = useState(null)
    const [profQuery, setProfQuery] = useState('')

    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [grade, setGrade] = useState('A');

    const [submitting, setSubmitting] = useState(false)
     useEffect(() => {
        let index = 0;
        searchClient.initIndex("classes").search(classSearch).then(({hits}) =>{
            setClassSuggested(hits)
        })
    }, [classSearch])
    useEffect(() => {
        let index = 0;
        searchClient.initIndex("professors").search(profSearch).then(({hits}) =>{
            setProfSuggested(hits)
        })
    }, [profSearch])
    
    async function handleSubmit(e){
        e.preventDefault();
        if((classQuery === '' && profQuery === '') || rating === 0 || title === '' || text === '') {
            return;
        }
        if(classQuery != '') {
            const docRef = await addDoc(collection(db, "Classes", classQuery, "Reviews"), {
                title: title,
                reviewMessage: text,
                rating: rating,
                timestamp: Timestamp.fromDate(new Date()),
                votescore: 0,
                grade: grade,
                // prof: profSearch,
            })
            
            const classDocRef = doc(db, "Classes", classQuery);
            try {
                await runTransaction(db, async(transaction) => {
                    const classDoc = await transaction.get(classDocRef)
                    if(classDoc.exists) {
                        var overallRating = classDoc.data().overallRating;
                        var numberReviews = classDoc.data().numberReviews ;
                        console.log("this rating: " + overallRating)
                        if(overallRating == null) {
    
                            await setDoc(classDocRef, {overallRating: 0}, {merge: true}  )
                            overallRating = 0;
                        } 
                        if(numberReviews == null) {
                            await setDoc(classDocRef, {numberReviews: 0}, {merge: true}  )
                            numberReviews = 0;
                        }
    
                        numberReviews = numberReviews == null ? 0 : numberReviews;
                        const newRating = ((overallRating * numberReviews) + rating) / (numberReviews+1)
                        numberReviews = numberReviews + 1;
                        transaction.update(classDocRef, { overallRating: newRating, numberReviews: numberReviews });
                    } else {
                        throw "Doc DNE"
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
        
        if(profQuery != '') {
            const docRef2 = await addDoc(collection(db, "Professors", profQuery, "Reviews"), {
                title: title,
                reviewMessage: text,
                rating: rating,
                timestamp: Timestamp.fromDate(new Date()),
                votescore: 0,
                class: classSearch,
            })
            const profDocRef = doc(db, "Professors", profQuery);
            try {
                await runTransaction(db, async(transaction) => {
                    const profDoc = await transaction.get(profDocRef)
                    if(profDoc.exists) {
                        var overallRating = profDoc.data().overallRating;
                        var numberReviews = profDoc.data().numberReviews ;
                        console.log("this rating: " + overallRating)
                        if(overallRating == null) {

                            await setDoc(profDocRef, {overallRating: 0}, {merge: true}  )
                            overallRating = 0;
                        } 
                        if(numberReviews == null) {
                            await setDoc(profDocRef, {numberReviews: 0}, {merge: true}  )
                            numberReviews = 0;
                        }

                        numberReviews = numberReviews == null ? 0 : numberReviews;
                        const newRating = ((overallRating * numberReviews) + rating) / (numberReviews+1)
                        numberReviews = numberReviews + 1;
                        transaction.update(profDocRef, { overallRating: newRating, numberReviews: numberReviews });
                    } else {
                        throw "Doc DNE"
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
        
        location.reload();
    }
    return(
        <Stack spacing={5}>    
            <Stack>
                <Text>Search for the Course Below</Text>
                <AutoComplete width={"60vw"}>
                    <InputGroup width={"60vw"}>
                        <AutoCompleteInput width={"60vw"} background="#333333" variant="filled" onChange={(e)=>setClassSearch(e.target.value)}/>
                        <InputRightElement>
                        <SearchIcon color="gray.300"></SearchIcon>
                        </InputRightElement>
                    </InputGroup>
                    <AutoCompleteList style={{position: "relative", zIndex:"10", background: "#333333" }}>
                        {classSuggested != null && classSuggested.map((hit, cid) => (
                            <AutoCompleteItem 
                                value={hit.objectID}
                                onClick={(e)=>{
                                    setClassQuery(e.target.outerText)
                                    
                                } }
                                textTransform="capitalize">
                                {hit.objectID }
                            </AutoCompleteItem>
                            ))}
                    </AutoCompleteList>
                </AutoComplete>
            </Stack>
            
            <Stack>
                <Text>Search for the Instructor Below</Text>
                <AutoComplete width={"60vw"}>
                    <InputGroup width={"60vw"}>
                        <AutoCompleteInput width={"60vw"} background="#333333" variant="filled" onChange={(e)=>setProfSearch(e.target.value)}/>
                        <InputRightElement>
                        <SearchIcon color="gray.300"></SearchIcon>
                        </InputRightElement>
                    </InputGroup>
                    <AutoCompleteList   style={{position: "relative", zIndex:"10", background: "#333333" }}>
                        {profSuggested != null && profSuggested.map((hit, cid) => (
                            <AutoCompleteItem 
                                value={hit.objectID}
                                onClick={(e)=>{setProfQuery(e.target.outerText)}}
                                textTransform="capitalize">
                                {hit.objectID }
                            </AutoCompleteItem>
                            ))}
                    </AutoCompleteList>
                </AutoComplete>
            </Stack>
            
            <HStack spacing={50}>
                <HStack alignItems={"center"} spacing={5}>
                    <Text width={125}>Semester Taken</Text>
                    <Input background="#333333" borderColor="#333333" width= {100} type="Text"></Input>
                </HStack>
                <HStack alignItems={"center"} spacing={5}>
                    <Text width={100}>Letter Grade</Text>
                    <Select onChange={(e)=>setGrade(e.target.value)} background="#333333" borderColor="#333333" width={70} textAlign="center">
                        <option style={{background: "#333333"}} value="A">A</option>
                        <option style={{background: "#333333"}} value="B">B</option>
                        <option style={{background: "#333333"}} value="C">C</option>
                        <option style={{background: "#333333"}} value="D">D</option>
                        <option style={{background: "#333333"}} value="F">F</option>
                    </Select>
                </HStack>
            </HStack>
            <ReviewEditor rating={rating} setRating={setRating} setTitle={setTitle} setText={setText}></ReviewEditor>
            <Button onClick={(e)=>{handleSubmit(e); setSubmitting(true)}} isLoading={submitting} marginLeft={0} width={150} textColor="#BBBBBB" background="#333333" >Submit</Button>
        </Stack>
    )
}