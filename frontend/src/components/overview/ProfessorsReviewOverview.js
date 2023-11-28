import "../../style/ReviewOverview.css"
import Navbar from "../navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "../PreviewCard.js"
import data from "../../sampleProfData.js"
import ClassProfessorFilter from "../filters/ClassProfessorFilter.js"

import {
    Box,
    Flex
} from "@chakra-ui/react"

export default function ProfessorsReviewOverview() {

    const [ options, setOptions ] = useState({
        department: "all",
        ratingCategory: "overall",
        ratingRange: [0, 5]
    })

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) =>(
        <div>
            <PreviewCard key={e.name} name={e.name} subheading={e.college} rating={e.rating}/>
        </div>
        )
        );
    }
    return (
        <>
            <Navbar />   
            <Box className="reviewoverview" padding="2em">
                <h1>Professors</h1>
                <div className="main" style={{marginTop: "2em"}}>
                    <Flex style={{
                        flexDirection: "row",
                        flex: 1,
                        flexGap: "5em",
                        justifyContent: "space-between",
                    }}>
                        <div style={{
                            width: "50%",
                            paddingRight: "3em"
                        }}>
                            <ClassProfessorFilter options={options} setOptions={setOptions} />
                        </div>
                        <div className="previews">
                            {getPreviewCards()}
                        </div>
                    </Flex>
                </div>
            </Box>
        </>
    );
}