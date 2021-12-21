import React from "react";

export const AirlineHeader = props => {
  // const { name, img_url, avg_score} = props.attributes;
  // const totalReviews = props.reviews.length;

  const {
    attributes: {
      name, 
      img_url, 
      avg_score
  },
    reviews
  } = props;

  return (
    <div className="AirlineHeader">
      <h1>
        {name}
      </h1>
      <img src={img_url} alt={name} width='50px' height='50px'/>
      <div className="">
        <div className="totalReviews">{reviews.length} User Reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_score} out of 5</div>
      </div>
    </div>
  )
}; 