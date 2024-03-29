import axios from "axios";
import React from "react";

const _api_end_point = "http://172.16.50.58:5000"

function loginToAPI(email, password) {
    axios.post(
        `${_api_end_point}/login`, 
        {
            email: email,
            password: password
        },
    ).then(result => {
        localStorage.setItem("authorization", result.data)
        alert("Successfully logged in!")
        window.location.replace("/")
    })
    .catch((e) => {alert(e)})
}
function newChat(prompt) {
    const token = localStorage.getItem("authorization");

    if (token == null) {
        window.location(replace("/login"))
    } 

    axios.post(
        `${_api_end_point}/new`, 
        {
            prompt: prompt
        },
        {headers: {
            "Authorization": `Bearer ${token}`
        }}
    ).then(result => {
        window.location.replace('/chats')
    })
    .catch((e) => {alert(e)})
}

function getChats() {
    const token = localStorage.getItem("authorization");

    if (token == null) {
        window.location(replace("/login"))
    } 

    axios.get(
        `${_api_end_point}/chats`, 
        {headers: {
            "Authorization": `Bearer ${token}`
        }}
    ).then(result => {
        console.log(result.data);
    })
    .catch((e) => {alert(e)})
}

function replyToChat(chat_id, prompt) {
    const token = localStorage.getItem("authorization");

    if (token == null) {
        window.location(replace("/login"))
    } 

    axios.put(
        `${_api_end_point}/chat/${chat_id}/reply`,
        {
            "prompt": prompt
        },
        {headers: {
            "Authorization": `Bearer ${token}`
        }}
    ).then(result => {
        return result.data
    })
    .catch((e) => {alert(e)})
}

function deleteChat(chat_id) {
    const token = localStorage.getItem("authorization");

    if (token == null) {
        window.location(replace("/login"))
    } 
    if (confirm("Are you sure?")) {
        axios.delete(
            `${_api_end_point}/chat/${chat_id}/delete`,
            {headers: {
                "Authorization": `Bearer ${token}`
            }}
        ).then(result => {
            alert(result.data.status)
        })
        .catch((e) => {alert(e)})
    }
}

export default {
    newChat: newChat,
    loginToAPI: loginToAPI,
    getChats: getChats,
    deleteChat: deleteChat,
    replyToChat: replyToChat,
    _api_end_point: _api_end_point
}