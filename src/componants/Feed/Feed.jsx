
import React from "react";
import "./Feed.css";

const Feed = (prop) => {
  return (
    <>
      <div className="feed">
        <div className="profile-info">
          <img src={prop.profilImg} alt="Profile img" />
          <h4>{prop.userName}</h4>

        </div>
        <div className="post">{prop.img ? <img src={prop.img} /> : ""}</div>
        <div className="caption">
          <h4>Caption</h4>
          <p>{prop.caption}</p>
          <div className="comment">
            
        </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Feed;
