import React from "react";
import "./styles.css";
import { useState } from "react";

const quotes = {
  rum:
    "Rum is tonic that clarifies the vision, and sets things in true perspective",
  whiskey:
    "Of all the spirits that flow freely in India, whisky is the one with the most devoted fan base",
  vodka:
    "All by itself, or thrown into the most classic cocktail mixes, Vodka is the definition of liquid courage",
  beer:
    "world of beer is limitless, drink that keeps coming on the table again and again",
  gin: "Laughter Is The Best Medicine, Or Gin... Whatever"
};

const alcoholDB = {
  rum: [
    { name: "Old Monk", rating: "4/5" },
    { name: "Captain Morgan", rating: "3.5/5" },
    { name: "Bacardi", rating: "3/5" }
  ],

  whiskey: [
    {
      name: "Teacher's",
      rating: "4.8/5"
    },
    {
      name: "Blender's Pride",
      rating: "4.3/5"
    },
    {
      name: "100 Pipers",
      rating: "4.5/5"
    },
    {
      name: "Red Label",
      rating: "4.5/5"
    },
    {
      name: "Dewars",
      rating: "4.3/5"
    },
    {
      name: "Jameson",
      rating: "4.4/5"
    },
    {
      name: "Jack Daniel’s",
      rating: "4.7/5"
    },

    {
      name: "Royal Challenge",
      rating: "4/5"
    },
    {
      name: "Imperial Blue",
      rating: "3/5"
    }
  ],
  vodka: [
    {
      name: "Smirnoff",
      rating: "3.5/5"
    },
    {
      name: "Magic Moments",
      rating: "3/5"
    }
  ],
  beer: [
    {
      name: "Heineken",
      rating: "4.6/5"
    },
    {
      name: "Budweiser Magnum",
      rating: "4.5/5"
    },
    {
      name: "Carlsberg",
      rating: "4/5"
    },
    {
      name: "Bira 91",
      rating: "4/5"
    },
    {
      name: "Tuberg",
      rating: "3.2/5"
    },
    {
      name: "Foster",
      rating: "3/5"
    },
    {
      name: "Kingfisher",
      rating: "3/5"
    }
  ],
  gin: [
    {
      name: "Kingfisher",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("rum");
  const [quote, setQuote] = useState(
    "make a better choice the next time you decide on a party . . ."
  );

  function typeClickHandler(type) {
    setType(type);
    setQuote(quotes[type]);
  }
  return (
    <div className="App">
      <h1> 🍻 Alcohol </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite alcohols. Select a type to get started{" "}
      </p>

      <div>
        {Object.keys(alcoholDB).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "white"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <p>{quote}</p>
      <hr />
      <div className="container" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {alcoholDB[selectedType].map((alcohol) => (
            <li
              key={alcohol.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {alcohol.name} </div>
              <div style={{ fontSize: "smaller" }}> {alcohol.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
