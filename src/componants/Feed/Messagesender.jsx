import React from "react";
import "./MessageSender.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// icons

import {Photo} from "@material-ui/icons";

// context api

// database
const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <div class="container bootstrap">
    <div class="row">
        <div class="col-md-offset-3 col-md-6 col-xs-12">
            <div class="well well-sm well-social-post">
        <form>
            <ul class="list-inline" id='list_PostActions'>
              
                <li><a href='#'>Add photos/Video</a></li>
                <div className="messageSenderOption">
                <Photo style={{ color: "blue" }} />
               
                </div>
                
              
            </ul>
            <textarea class="form-control" placeholder="What's in your mind?"></textarea>
            <ul class='list-inline post-actions'>
                <li><a href="#"><span class="glyphicon glyphicon-camera"></span></a></li>
                
                <li class='pull-right'><a href="#" class='btn btn-primary btn-xs'>Post</a></li>
            </ul>
        </form>
            </div>
        </div>
    </div>
</div>                                                            
    </>
  );
};

export default MessageSender;
