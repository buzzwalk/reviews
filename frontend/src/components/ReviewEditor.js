import { Box, Text, Input, Stack, Textarea, HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import "../style/addreview.css"
export default function ReviewEditor({rating, setRating, title, setTitle, text, setText}){
    return (
        <Box bg="#333333" padding={"20px"} borderRadius={15}>
            <Stack spacing={"20px"}>
                <HStack>
                    <Text>Select a rating out of 5 stars</Text>
                    {StarRating(rating, setRating)}
                </HStack>
                <Stack>
                    <Text>Write a short title</Text>
                    <Input onChange={(e)=>{setTitle(e.target.value)}} type="text" width="33%" background="#484747" borderColor="#484747"></Input>
                </Stack>
                <Stack>
                    <Text>Write your review here</Text>
                    <Textarea onChange={(e)=>{setText(e.target.value)}} background="#484747" borderColor="#484747"></Textarea>
                </Stack>
                
            </Stack>
            
        </Box>
    )
}

const StarRating = (rating, setRating) => {
    
    
    console.log(rating)
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index = 5 - index;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };