import React from "react";

export const ReviewForm = props => {
	const { 
		attributes: {
			id: airline_id,
			name
		},
		submitted,
		setReviews,
		setAirlineAttr
	} = props;

	return (
		<div className="ReviewForm-wrapper">
			<form action="" className="ReviewForm-form" onSubmit={(e) => submitted(e, airline_id, setReviews, setAirlineAttr)}>
				<div className="">Have an experiece with {name}, share your review?</div>
				<div className="ReviewForm-fields">
					<div className="ReviewForm-group">
						<label htmlFor="ReviewForm--title">Review Title</label>
						<input 
							id='ReviewForm--title' 
							type="text" 
							placeholder="Review Title" 
							name='title'/>
					</div>
					<div className="ReviewForm-group">
						<label htmlFor="ReviewForm--desc">Review Description</label>
						<input 
							id='ReviewForm--desc' 
							type="textarea" 
							placeholder="Review Description" 
							name='description'
							style={{
								width: '300px',
								height: '50px'
						}}/>
					</div>
					<div className="ReviewForm-group">
						<label htmlFor="ReviewForm-rating">Review this airline 1-5</label>
						<input 
							id='ReviewForm-rating' 
							type="text" 
							className="ReviewForm-rating"
							name='score'/>
					</div>
					<button type='submit'>Submit your review</button>
				</div>
			</form>
		</div>
	)
}; 