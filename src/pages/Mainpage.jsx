import { React, useEffect, useState }  from "react";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Outlinedbutton from "../components/Outlinedbutton";
import { useNavigate } from "react-router-dom";
import handler from "../utils/Handler"

function MainPage() {

  const navigate = useNavigate();
  const [isLoggedIn, setAccountStatus] = useState(false);
  const [prompt, setPrompt] = useState("")
  useEffect(() => {setAccountStatus(localStorage.getItem("authorization") == null ? false : true)}, [])

  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="text-center flex-grow bg-gradient-to-br from-gray-900/20 via-80% to-transparent">
        <article>
          <h1 className=" mt-80 font-bold text-6xl bg-gradient-to-r from-blue-500 via-yellow-600 via-60% to-blue-500 bg-clip-text text-transparent inline-block">Dirbtinis intelektas</h1>
          <p className="text-gray-500 mx-10 mt-5 lg:mx-80 lg:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, fugiat delectus possimus cupiditate, reiciendis excepturi molestias ullam facilis provident voluptate expedita neque aliquam aperiam repudiandae quas quidem, iusto exercitationem sed?
          Blanditiis possimus aliquid minima eum maxime assumenda exercitationem, dolor laborum. Error accusamus culpa, pariatur autem commodi voluptatibus quia.</p>
        </article>
        <div className="gap-2 mt-10 flex flex-row items-center justify-center">
          <textarea className="w-80" onChange={(e) => (setPrompt(e.target.value))}></textarea>
          <Outlinedbutton text="Pradėti pokalbį" color={"blue-500"} onClick={
           () => {isLoggedIn == true ? handler.newChat(prompt) : navigate("/login")}
          } custom={"text-xl lg:text-2xl"}/>
        </div>
      </main>
      <Footer />
    </div>
    </>
    
  )
}

export default MainPage;
