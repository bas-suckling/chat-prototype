import React from "react"

export default function ChatApp() {
    return (
        <>
            <div id="chatWindow">
                <div class="row">
                    <div class="col-sm-4">
                        <div id="rooms" class="window">
                        <p>Placeholder for Rooms</p>
                        </div>

                    </div>
                    <div class="col-sm-8">
                        <div id="messageWall" class='window'>
                            <p>Placeholder for messages</p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row align-items-center" id="inputSection">
                            <div class="col-sm-4">
                                    <input id="mySecretKey" class="form-control" type="text" placeholder="Write your secret key here.">
                                    </input>
                            </div>
                            <div class="col-sm-4">
                            <input id="otherUserSecretKey" class="form-control" type="text" placeholder="Write their secret key here.">
                                    </input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row align-items-center" id="inputSection" >
                            <div class="col-sm-10">
                                    <textarea id="messageBar" class="form-control" rows="2" type="text" placeholder="Write a message here.">
                                    </textarea>
                            </div>
                            <div class="col-sm-2">
                                <button type="submit" id="sendButton" class="btn btn-outline-light btn-block">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}