import React from "react";

function Outlinedbutton ( { text, onClick, color, custom } ) {
    return (
        <>
        <button className={`border border-2 border-${color} text-${color} p-3 rounded-full ${custom}`} onClick={onClick}>{text}</button> 
        </>
    )
}  

export default Outlinedbutton;