import { Box, Text, Input, Stack, Textarea, HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import "../style/addreview.css"
export default function ReviewEditor(){
    return (
        <Box bg="#333333" padding={"20px"} borderRadius={15}>
            <Stack spacing={"20px"}>
                <HStack>
                    <Text>Select a rating out of 5 stars</Text>
                    {StarRating()}
                </HStack>
                <Stack>
                    <Text>Write a short title</Text>
                    <Input type="text" width="33%" background="#484747" borderColor="#484747"></Input>
                </Stack>
                <Stack>
                    <Text>Write your review here</Text>
                    <Textarea background="#484747" borderColor="#484747"></Textarea>
                </Stack>
                
            </Stack>
            
        </Box>
    )
}

const StarRating = () => {
    
    const [rating, setRating] = useState(0);
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