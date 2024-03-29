import React from "react";

const pages = [
    {
        text: "Pagrindiniai",
        pages: [
            {text:"Prisijungti", url:"/login"},
            {text:"Naujas pokalbis", url:"/naujas-pokalbis"},
            {text:"Pokalbių istorija", url:"/pokalbiai"}
        ]
    }
]

function Footer() {
    return (
        <footer className="flex flex-row justify-between bg-main p-4">
            <div>
                <h1 className="text-xl text-white font-bold">Made by Aidas Šalvis</h1>
                <h2 className="text-gray-400 text-lg">KTMC Student</h2>
            </div>
            <div>
                <p className="text-gray-400 text-lg">Padaryta 2024-03-29 15:30</p>
            </div>
        </footer>
    )
}

export default Footer;