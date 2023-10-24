import React, { useState } from 'react';
import ApartmentReview from '../components/ApartmentReview';
import DiningReview from '../components/DiningReview';
import ClassReview from '../components/ClassReview';
import CommentComponent from '../components/CommentComponent';

import { ChakraProvider, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react';

import Header from '../components/Header'

const classInformation = {
  classes: {
    "Computer Science": {
      "CS 1332 - Data Structures & Algorithms": [
        "Faulker",
        "HB"
      ],
      "CS 2110 - Computer Organization & Programming": [
        "Conte",
        "Gupta"
      ],
    },
    "Computer Engineering": {
      "ECE 2031 - Digital Design Laboratory": [
        "Thomas Collins"
      ]
    }
  },
  ratingText: [
    {
      header: "Overall",
      small: "I liked this class"
    },
    {
      header: "Easiness",
      small: "This class was easy"
    }
  ],
  tags: [
    "Tolerates Tardiness",
    "Issues PTEs",
    "Participation Matters",
    "Snazzy Dresser"
  ]
}

const CreateReview = () => {
  const [selectedReviewType, setSelectedReviewType] = useState('class');
  return (
    <ChakraProvider>
      <Header />
      <Box p={4} style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        gap: "1em"
      }}>
        <Heading style={{
          margin: "auto"
      }}>
          Add review
        </Heading>
        <ButtonGroup style={{
          margin: "auto"
        }}>
          <Button
            onClick={() => setSelectedReviewType('class')}
            colorScheme={selectedReviewType === 'class' ? 'teal' : 'gray'}           
          >
            Class
          </Button>
          <Button
            onClick={() => setSelectedReviewType('apartment')}
            colorScheme={selectedReviewType === 'apartment' ? 'teal' : 'gray'}          
          >
            Apartment
          </Button>
          <Button
            onClick={() => setSelectedReviewType('dining')}
            colorScheme={selectedReviewType === 'dining' ? 'teal' : 'gray'}           
          >
            Dining
          </Button>
        </ButtonGroup>
        {selectedReviewType === 'apartment' && <ApartmentReview />}
        {selectedReviewType === 'dining' && <DiningReview />}
        {selectedReviewType === 'class' && <ClassReview />}
      </Box>
      {/* <CommentComponent /> */}
    </ChakraProvider>
  )
}

export default CreateReview
