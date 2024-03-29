import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Handler from "../utils/Handler";
import axios from "axios";
import Chat from "../components/Chats";
import ChatBox from "../components/ChatBox";

function ChatPage() {

    const navigate = useNavigate();
    const [isLoggedIn, setAccountStatus] = useState(false);
    const [chats, setChats] = useState(null)
    const [activePage, setActivePage] = useState("")

    useEffect(() => {
        setAccountStatus(localStorage.getItem("authorization") == null ? navigate("/login") : true);
        
        const token = localStorage.getItem("authorization");

        if (token == null) {
            window.location(replace("/login"))
        } 

        async function getChats() {
            await axios.get(
                 `${Handler._api_end_point}/chats`, 
                 {headers: {
                     "Authorization": `Bearer ${token}`
                 }}
             ).then(result => {
                 setChats(result.data)
             })
             .catch((e) => {alert(e)})
        }

        getChats();
        
    }, [])
  
    return (
        <>
        <div className="h-screen flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="flex-grow ">
                <div className="flex flex-row">
                    <div className="border h-screen px-10">
                        <ul>
                            {
                                chats === null ? <p>No chats open yet.<br /> <a href="/new" className="text-blue-500">Open a new one!</a></p> : chats.forEach(chat => 
                                    <>
                                      <li>
                                        <Chat id={chat.id} name={chat.name} />
                                      </li>                            
                                    </>
                                    )
                            }
                        </ul>
                    </div>
                    <div className="">
                        <ChatBox messages={[]}/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default ChatPage;