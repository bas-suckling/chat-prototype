import React from "react"

export default function LandingPage() {

    return (
        <>
            <div className="container-fluid" id="howItWorks">
                <h1>How it Works</h1>
                <h2>Encryption</h2>
                <p>
                   The shared secret key is hashed using the <a href="https://en.wikipedia.org/wiki/SHA-2">Secure Hash Algorithm 256</a> method.
                    The plaintext message is then encrypted using the <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">Advanced 
                    Encryption Standard 256</a> method. Once the message has been encrypted, it is sent via the server to the other user, who decrypts
                     the message at their end using the same method. 
                </p>
                <p>
                    This is a simple implementation of end to end encryption which requires both users to know each other's secret keys in advance. 
                    Once encrypted, the message is considered unbreakable using current code breaking methods. A far simpler target is the unencrypted 
                    message at each end of the app, so keep an eye on who is standing behind you, or who has access to your device!
                </p>
                <br/>
                <h2>Chat Application</h2>
                <p>
                    The application was built using Node.js, React and the chat functionality is facilitated using the <a href="https://socket.io/">Socket.io</a> library.
                </p>
            </div>
        </>
    )
}