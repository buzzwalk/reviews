import "../style/ReviewOverview.css";
import Navbar from "./navbar.js";
import { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

export default function DiningReviewOverview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function queryData() {
      const query = collection(db, "DiningHalls");
      const querySnapshot = await getDocs(query);
      const reviewsData = [];
      querySnapshot.forEach((doc) => {
        reviewsData.push({
          name: doc.data().name,
          subheading: doc.data().address,
          rating: doc.data().overallRating,
        });
      });
      console.log(reviewsData)
      setReviews(reviewsData);
    }

    queryData();
  }, []);

  function getPreviewCards() {
    return reviews.map((review) => (
      <PreviewCard
        name={review.name}
        subheading={review.subheading}
        rating={review.rating}
      />
    ));
  }

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
          <div className="previews">{getPreviewCards()}</div>
        </div>
      </div>
    </>
  );
}