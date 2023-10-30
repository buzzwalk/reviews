import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar.js";
import PreviewCard from "./PreviewCard";

const dormsRef = collection(db, "DiningHalls");

export default function ApartmentReviewOverview() {
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
        const fetchApartments = async () => {
            const querySnapshot = await getDocs(dormsRef);
            const apartmentReviews = querySnapshot.docs.map((doc) => ({
                name: doc.data().name,
                address: doc.data().address,
                overallRating: doc.data().overallRating,
            }));
            
            setPreviewCards(apartmentReviews);
        };

        fetchApartments();
    }, []);

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Apartments</h1>
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
