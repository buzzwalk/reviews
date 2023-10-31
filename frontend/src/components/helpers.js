import PreviewCard from "./PreviewCard";
import { getDocs } from "firebase/firestore";

export function getPreviewCards(previewCards) {
    return previewCards.map((card, index) => (
        <PreviewCard
            key={index}
            name={card.name}
            subheading={card.address}
            rating={card.overallRating}
        />
    ))
}

export const fetchData = async (docRef, setPreviewCards) => {
    const querySnapshot = await getDocs(docRef);
    const reviews = querySnapshot.docs.map((doc) => ({
        name: doc.data().name,
        address: doc.data().address,
        overallRating: doc.data().overallRating,
    }));
    
    setPreviewCards(reviews);
};