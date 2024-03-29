import { React, useState } from "react";
import MessageElement from "./Message";
import Outlinedbutton from "./Outlinedbutton";
import Handler from "../utils/Handler";
import { HiChat } from "react-icons/hi";


function ChatBox( { messages }) {
    const [prompt, setPrompt] = useState("")
    
    return <>
    <div className="h-screen flex flex-col">
        <div className="flex-grow">
            <ul>
                {messages.map(message => {
                    <li>
                        <MessageElement senderIsAI = {message.senderIsAI} text = {message.text} generating={message.generating} />
                    </li>
                })}
            </ul>
        </div>
        <div className="min-w-screen flex flex-row">
            <textarea className="bg-gray-200 rounded-xl flex-grow" onChange={(e) => {setPrompt(e.target.value)}} />
            <Outlinedbutton text={<HiChat />} color="blue-500" onClick={() => {Handler.replyToChat(prompt)}} />
        </div>
        
    </div>
    </>

    
}

export default ChatBox;