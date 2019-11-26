import React from 'react'
import io from 'socket.io-client'

export const CTX = React.createContext()




// individual messages will be in the following format
    // msg {
    //     from: 'user',
    //     msg: 'hi',
    //     topic: 'general'
    // }

// state will look like this
    // state {
    //     general: [
    //         {msg}, {msg}, {msg}
    //     ],
    //     topic2: [
    //         {msg}, {msg}, {msg}
    //     ]
    // }


const initState = {
    "Encrypted Chat": [
                {from: '', msg: ""}
            ],
    }


function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default:
            return state
    }
}

let socket;

function sendChatAction (value) {
    socket.emit('chat message', value)
}

export default function (props) {

    const user = 'User-' + Math.floor(Math.random()*100)
    const [allChats, dispatch] = React.useReducer(reducer, initState)

    if (!socket) {
        socket = io('/')
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
        })
    }


    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}