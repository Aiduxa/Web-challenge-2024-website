import { React, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Outlinedbutton from "../components/Outlinedbutton";
import Handler from "../utils/Handler";

function NewchatPage () {

  const [isLoggedIn, setAccountStatus] = useState(false);
  const [prompt, setPrompt] = useState("")
  useEffect(() => {setAccountStatus(localStorage.getItem("authorization") == null ? false : true)}, [])
    
  return (
        <div className="flex flex-col h-screen">
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="flex-grow">
                <article className="text-center mt-80">
                    <h1 className="text-4xl font-bold secondary">Sukurti naują pokalbį</h1>
                    <div className="">
                        <p className="mt-2 text-gray-400">Ko norėtum paklausti dirbtinio intelekto?</p>
                        <div className="flex-row flex gap-4 justify-center">
                            <textarea className="bg-gray-100 rounded-xl w-80 mt-2 px-2" onChange={(e) => {setPrompt(e.target.value)}}></textarea>
                            <Outlinedbutton text="Pradėti naują pokalbį" color="blue-500" onClick={() => {Handler.newChat(prompt)}} />
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default NewchatPage;