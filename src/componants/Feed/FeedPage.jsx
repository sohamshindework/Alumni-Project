import React from "react";
import feed from "../API/feedData";
import Feed from "./Feed";
import MessageSender from "./Messagesender";
const FeedPage = (prop) => {
  return (
    <>
      <MessageSender />
      {feed.map((pos) => {
        return (
          
          <Feed
            userName={pos.userName}
            profilImg={pos.profilImg}
            img={pos.img}
            caption={pos.caption}
           
          />
          
        );
      })}
    </>
  );
};

export default FeedPage;
