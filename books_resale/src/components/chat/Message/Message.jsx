import React from 'react';
import './message.css'

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImage"
        src='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png'
        alt="message_image"/>
        <p className="messageText">Lorem ipsum dolor sit amet consect adipisicing elit.</p>
      </div>
      <div className="messageBottom">
        1 hour ago
      </div>
    </div>
  );
};

export default Message;