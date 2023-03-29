import React from 'react';
import './chatonline.css'

const ChatOnline = () => {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImageContainer'>
          <img className="chatOnlineImage" src='https://hips.hearstapps.com/hmg-prod/images/zendaya-red-hair-1560852583.jpg?resize=2048:*' alt="online_imag"/>
          <div className='chatOnlineBadge'></div>
        </div>
        <div className='chatOnlineName'>John Doe</div>
      </div>
    </div>
  );
};

export default ChatOnline;