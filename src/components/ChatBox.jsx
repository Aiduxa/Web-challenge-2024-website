import React from "react";
import MessageElement from "./Message";

function ChatBox( { messages }) {
    <ul>
        {messages.map(message => {
            <MessageElement senderIsAI = {message.senderIsAI} text = {message.text} generating={message.generating} />
        })}
    </ul>
    
}

export default ChatBox;