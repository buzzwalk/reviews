import React, { useState } from 'react';
import ApartmentReview from '../components/ApartmentReview';
import DiningReview from '../components/DiningReview';
import ClassReview from '../components/ClassReview';
import CommentComponent from '../components/CommentComponent';

import { ChakraProvider, Box, Text, ButtonGroup, Button } from '@chakra-ui/react';


const CreateReview = () => {
  const [selectedReviewType, setSelectedReviewType] = useState('class');
  return (
    <ChakraProvider>
      <Box p={4}>
        <Text fontSize="xl" mb={4}>
          This is the page to create reviews
        </Text>
        <ButtonGroup>
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
          <Button
            onClick={() => setSelectedReviewType('class')}
            colorScheme={selectedReviewType === 'class' ? 'teal' : 'gray'}           
          >
            Class
          </Button>
        </ButtonGroup>
        {selectedReviewType === 'apartment' && <ApartmentReview />}
        {selectedReviewType === 'dining' && <DiningReview />}
        {selectedReviewType === 'class' && <ClassReview />}
      </Box>
      <CommentComponent />
    </ChakraProvider>
  )
}

export default CreateReview
