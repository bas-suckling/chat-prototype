import React from "react"
import {CTX} from './Store'


export default function ChatApp() {
    
    // CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX)
    
    const topics = Object.keys(allChats)
    //local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('');
    

    return (
        <>
            <div id="chatWindow">
                <div className="row">
                    <div className="col-sm-3">
                        <div id="rooms" className="window">
                            <ul>
                                {
                                    topics.map(topic => (
                                        <li key={topic}>
                                            <button onClick={e => changeActiveTopic(e.target.innerText)} className="btn btn-light btn-block">{topic}</button>
                                        </li>
                                    ))
                                }
                            </ul>
            
                        </div>

                    </div>
                    <div className="col-sm-9">
                        <div id="messageWall" className='window'>
                        {
                                    allChats[activeTopic].map((chat, i) => (
                                        <div className="chatMessage"key={i}>
                                            <p>{chat.from}: {chat.msg}</p>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                    
                    <div className="col-sm-12">
                        <div className="row" id="inputSection" >
                            <div className="col-sm-10">
                                    <textarea className="form-control" rows="2" type="text" placeholder="Write a message here." value={textValue}onChange={e => changeTextValue(e.target.value)}>
                                    </textarea>
                            </div>
                            <div className="col-sm-2">
                                <button 
                                onClick={() => {
                                    sendChatAction({from: user, msg: textValue, topic: activeTopic})
                                    changeTextValue('')
                                }} 
                                type="submit" 
                                id="sendButton" 
                                className="btn btn-outline-light btn-block sendButton"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row" id="inputSection">
                            <div className="col-sm-4">
                                    <input id="mySecretKey" className="form-control" type="text" placeholder="Write your secret key here.">
                                    </input>
                            </div>
                            <div className="col-sm-4">
                            <input id="otherUserSecretKey" className="form-control" type="text" placeholder="Write their secret key here.">
                                    </input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}