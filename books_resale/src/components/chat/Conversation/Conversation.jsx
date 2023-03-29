import React from 'react';
import './conversation.css'

const Conversation = () => {
  return (
    <div className='conversation'>
      <img className='conversationImage' src='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png' alt="profile_img" />
      <span className='conversationName'>John Doe</span>
    </div>
  );
};

export default Conversation;