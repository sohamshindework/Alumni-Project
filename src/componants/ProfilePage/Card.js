import React from "react";
import "./Card.css";
import "./CardTab.css";
import "./CardMobile.css";
import "./ProfileTab.css";
import userImg from "./user.png";

export default function Card() {
  return (
    <div className="cardOut">
      <img src={userImg} className="cardImg" />
      <div className="cardContent">
        <p className="postHeading">Post Heading: This Is First Post</p>
        <p className="postTextContent">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          animi! Lorem ipsum dolor sit amet.
        </p>
        <button className="postDetailsBtn">View Complete Post</button>
      </div>
    </div>
  );
}
