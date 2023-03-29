import React from 'react';
import ChatOnline from './chatOnline/ChatOnline';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import './Messenger.css'

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='Search for friends' className='chatMenuInput'/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message own/>
            <Message/>
            <Message own/>
            <Message own/>
            <Message/>
            <Message own/>
            <Message own/>
            <Message/>
            <Message own/>
            <Message own/>
            <Message/>
            <Message own/>
        </div>
        <div className="chatBoxBottom">
          <textarea className="chatMessageInput" placeholder='write something'></textarea>
          <button className="chatSubmitButton">send</button>
        </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
        </div>
      </div>
    </div>
  );
};

export default Messenger;