import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Handler from "../utils/Handler";

function ChatPage() {

    const navigate = useNavigate();
    const [isLoggedIn, setAccountStatus] = useState(false);
    const [chats, setChats] = useState([])
    const [activePage, setActivePage] = useState("")

    useEffect(() => {
        setAccountStatus(localStorage.getItem("authorization") == null ? navigate("/login") : true);
        
        const _chats = Handler.getChats();
        
        setChats(_chats)
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
                                chats != null ? chats.map((chat) => {
                                <li className="">
                                        <div>
                                            <p>{chat.name}</p>
                                        </div>
                                </li> 
                                }) : <p>No chats open yet.<br /> <a href="/" className="text-blue-500">Open a new one!</a></p>
                            }
                        </ul>
                    </div>
                    <div className="">

                    </div>
                </div>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default ChatPage;