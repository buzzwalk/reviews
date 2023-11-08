import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleProfData"
import ApartmentFilter from "./ApartmentFilter"

export default function ApartmentReviewOverview() {
    const [options, setOptions] = useState({
        ratingCategory: "overall",
        ratingRange: [0, 5],
        beds: [0, 10],
        baths: [0, 10],
        priceRange: [0, 10000],
        amenities: []
    });
    
    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Apartments</h1>
                <div className="main">
                    <ApartmentFilter options={ options } setOptions={ setOptions } />
                    <div className="previews">
                        {   
                            data.data.map((apartment) => 
                                <PreviewCard 
                                    key={apartment.name} 
                                    name={apartment.name} 
                                    subheading={apartment.college} 
                                    rating={apartment.rating} 
                                />
                            )
                        }  
                    </div>
                </div>
                
            </div>
        </>
        
    );
}