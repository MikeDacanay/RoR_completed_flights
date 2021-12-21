airlines = Airline.create([
    { 
      name: "United Airlines",
      img_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
    }, 
    { 
      name: "Southwest",
      img_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
    },
    { 
      name: "Delta",
      img_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
    }, 
    { 
      name: "Alaska Airlines",
      img_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
    }, 
    { 
      name: "JetBlue",
      img_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
    }, 
    { 
      name: "American Airlines",
      img_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
    }
]);

reviews = Review.create([
    {
        title: 'Great airline',
        description: 'I had a lovely time',
        score: 5,
        airline: airlines.first
    },
    {
        title: 'Bad airline',
        description: 'terrible time here',
        score: 1,
        airline: airlines.first        
    }
]);