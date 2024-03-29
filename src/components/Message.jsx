import React from "react";

function MessageElement( senderIsAI, text, generating ) {

    const name = senderIsAI == true ? "Dirbtinis intelektas" : "Tu";

    return (
        <>
            <li>
                <div className={senderIsAI == true ? "bg-gray-200/80" : "bg-blue-400/60"}>
                    <p className={"text-2xl font-bold" + senderIsAI == true ? "text-black" : "text-white"}>{name}</p>
                    {generating == true ? <p className="text-md font-bold">Dirbtinis intelektas mąsto..."</p> : <p className={"text-md font-bold" + senderIsAI == true ? "text-gray-700" : "text-gray-200/50"}><pre>{text}</pre></p>}
                </div>
            </li>
        </>
    )

}

export default MessageElement