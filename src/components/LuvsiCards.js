import React from "react";
import { useState } from "react";
import LuvsiCard from "react-tinder-card";
import "../styles/LuvsiCards.css";
import { useEffect } from "react";
import database from "../firebase";
const LuvsiCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Hansika1",
      url: "https://movietickets4u.in/wp-content/uploads/2022/12/shruti-haasan.jpg",
    },
    {
      name: "aishwarya",
      url: "https://wallpaperaccess.com/full/1279777.jpg",
    },
    {
      name: "Salman",
      url: "https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg",
    },
    {
      name: "aishwarya",
      url: "https://movietickets4u.in/wp-content/uploads/2022/12/shruti-haasan.jpg",
    },
    {
      name: "salman",
      url: "https://e1.pxfuel.com/desktop-wallpaper/181/356/desktop-wallpaper-salman-khan-by-evilstarsai-salman-khan-wanted.jpg",
    },
    {
      name: "aishwarya",
      url: "https://wallpaperaccess.com/full/1279777.jpg",
    },
  ]);
  
  return (
    <div>
      <h1>Luvsi cards</h1>
      <div className="luvsiCards_cardContainer">
        {people.map((person) => (
          <LuvsiCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </LuvsiCard>
        ))}
      </div>
    </div>
  );
};

export default LuvsiCards;
