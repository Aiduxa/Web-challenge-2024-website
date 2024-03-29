import React, { useState } from "react";
import Outlinedbutton from "../components/Outlinedbutton";
import handler from "../utils/Handler";


function LoginPage() {

    const [userData, setUserData] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="h-screen text-center items-center justify-center align-center">
            <div className="h-screen bg-gray-200/80 w-auto rounded-xl content-center">
                <h1 className="main text-3xl font-bold">KITM DI</h1>
                <div className="flex-col">
                    <p className="text-gray-500 font-semibold my-2 mt-10">
                        E-mail
                    </p>
                    <input type="email" className="rounded-xl p-2 px-10" onChange={(e) => {setEmail(e.target.value)}}></input>
                    <p className="text-gray-500 font-semibold my-2 ">
                        Password
                    </p>
                    <input type="password" className="rounded-xl p-2 px-10" onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>
                <Outlinedbutton text={"Prisijungti"} color="blue-800" custom={"mt-4 mb-5"} onClick={() => {handler.loginToAPI(email, password)}}/>

            </div>
        </div>
    )
}

export default LoginPage