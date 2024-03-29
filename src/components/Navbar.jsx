import React from "react";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";

function Navbar( { isLoggedIn } ) {
  return (
    <header className='flex justify-between items-center bg-main p-5'>
      <div className="flex flex-row gap-2 items-center">
        <a href="/">
          <h1 className='font-bold text-white text-2xl m-2'>Projektas „KITM DI“</h1>
        </a>
        <a href="/chats" className="text-gray-300 font-semibold">Pokalbiai</a>
        <a href="/new" className="text-gray-300 font-semibold">Naujas</a>
      </div>
      {isLoggedIn == true ? <button className='text-white text-5xl m-2' onClick={() => {localStorage.removeItem("authorization"); location.reload()}}><HiOutlineLogout /></button> : <button className='text-white text-5xl m-2' onClick={() => {window.location.replace("/login")}}><HiOutlineUser /></button> }
    </header>
  )
}

export default Navbar;