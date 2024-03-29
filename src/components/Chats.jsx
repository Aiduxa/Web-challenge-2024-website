import React from "react";

function Chat( { id, name } ) {

    return <>
        <div className="flex flex-row hover:cursor-pointer" onClick={() => {}}>
            <p>{name}</p>
        </div>
    </>
}

export default Chat;