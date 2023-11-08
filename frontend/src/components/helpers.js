import PreviewCard from "./PreviewCard";
import { getDocs } from "firebase/firestore";

export function getPreviewCards(previewCards, handleSelect) {
    return previewCards.map((card, index) => (
        <div key={index} onClick={() => handleSelect(card.name)}>
            <PreviewCard
                name={card.name}
                subheading={card.address}
                rating={card.overallRating}
            />
        </div>
    ))
}

export function getPreviewCardsInfo(previewCardsInfo) {
    return previewCardsInfo.map((card, index) => (
        <PreviewCard
            key={index}
            name={card.reviewMessage}
            subheading={card.timestamp.toDate().toLocaleString()}
            rating={card.rating}
        />
    ))
}

export const fetchOverview = async (docRef, setPreviewCards) => {
    const querySnapshot = await getDocs(docRef);
    const reviews = querySnapshot.docs.map((doc) => ({
        name: doc.data().name,
        address: doc.data().address,
        overallRating: doc.data().overallRating,
    }));
    
    setPreviewCards(reviews);
};

export const fetchDiningHallReviews = async (docRef, setPreviewCardsInfo) => {
    const querySnapshot = await getDocs(docRef);
    const reviews = querySnapshot.docs.map((doc) => ({
        rating: doc.data().rating,
        reviewMessage: doc.data().reviewMessage,
        timestamp: doc.data().timestamp,
        voteScore: doc.data().voteScore
    }));
    
    setPreviewCardsInfo(reviews);
};

export const fetchDormReviews = async (docRef, setPreviewCardsInfo) => {
    const querySnapshot = await getDocs(docRef);
    const reviews = querySnapshot.docs.map((doc) => ({
        rating: doc.data().rating,
        reviewMessage: doc.data().reviewMessage,
        timestamp: doc.data().timestamp,
        voteScore: doc.data().voteScore
    }));
    
    setPreviewCardsInfo(reviews);
};