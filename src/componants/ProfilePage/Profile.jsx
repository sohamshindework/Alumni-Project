import React from "react";
// import Out from "../MyComponents/Out";
import "./Profile.css";
import "./ProfileTab.css";
import "./ProfileMobile.css";
import Card from "./Card";
import "./Card.css";
import "./CardTab.css";
import "./CardMobile.css";
import userImg from "./user.png";
import editLogo from "./edit.svg";

export default function Profile() {
  return (
    <div className="profileOut">
      <div className="personalInfoOut">
        <div className="personalInfo">
          <img src={userImg} className="userImgStyle" alt="" />
          <p className="userName">FirstName LastName</p>
          <p className="userShortDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            neque totam adipisci corrupti
          </p>
        </div>
        <div className="belowPersonalInfo">
          <div className="belowNavOptions">
            <img className="belowNavOptionsImg" src={editLogo} alt="" />
            <a href=" " className="belowNavOptionsText">
              Edit Profile
            </a>
          </div>
        </div>
      </div>
      <div className="contentOut">
        <div className="content">
          <p className="contentHeading">Personal Information</p>
          <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">Last Name: LastName</p>
          <p className="contentOptions">Country: Country</p>
          <p className="contentOptions">City: City</p>
          <p className="contentOptions">Date Of Birth: 00/00/0000</p>
          <p className="contentOptions">Age: 00</p>
          <p className="contentOptions">Past Country/Countries: Country</p>
          <p className="contentOptions">Past City/Cities: City</p>
        </div>
        <div className="content">
          <p className="contentHeading">Education</p>
          <p className="contentOptions">U.G.: Under Graduate</p>
          <p className="contentOptions">P.G.: Post Graduate</p>
          <p className="contentOptions">PhD: Doctor of Philosophy</p>
          <p className="contentOptions">12th / Polytechnic: Both</p>
          {/* <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p>
          <p className="contentOptions">First Name: FirstName</p> */}
        </div>
        <div className="content">
          <p className="contentHeading">Profession</p>
          <p className="contentOptions">Field Of Profession: Field</p>
          <p className="contentOptions">
            Years Of Experience In Current Field: 00
          </p>
          <p className="contentOptions">Profession: Profession</p>
          <p className="contentOptions">Organization: Organization</p>
          <p className="contentOptions">Past Field(s) Of Profession: Field</p>
          <p className="contentOptions">
            Years Of Experience In Past Field(s): 00
          </p>
          <p className="contentOptions">Past Profession(s): Profession</p>
          <p className="contentOptions">Past Organization(s): Organization</p>
        </div>
        <div className="postSection">
          <div className="contentHeading contentHeading1">
            <p>Posts</p>
            <button className="createPost">Create Post +</button>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
