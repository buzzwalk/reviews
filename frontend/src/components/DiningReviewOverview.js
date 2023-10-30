import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar.js";
import PreviewCard from "./PreviewCard";

const dormsRef = collection(db, "DiningHalls");

export default function DiningHallReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);

    function getPreviewCards(){
        return previewCards.map((card) => (
            <PreviewCard
                name={card.name}
                subheading={card.address}
                rating={card.overallRating}
            />
        ))
    }

    useEffect(() => {
        const fetchDiningHalls = async () => {
            const querySnapshot = await getDocs(dormsRef);
            const diningHallReviews = querySnapshot.docs.map((doc) => ({
                name: doc.data().name,
                address: doc.data().address,
                overallRating: doc.data().overallRating,
            }));
            
            setPreviewCards(diningHallReviews);
        };

        fetchDiningHalls();
    }, []);

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Dining Halls</h1>
                <div className="main">
                    <div className="filters">
                        <h3>Filters</h3>
                        <p>filters here</p>
                    </div>
                    <div className="previews">
                        {getPreviewCards()}
                    </div>
                </div>
            </div>
        </>
    );
}
