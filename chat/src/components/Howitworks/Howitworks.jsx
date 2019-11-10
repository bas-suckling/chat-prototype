import React from "react"
import { Link } from 'react-router-dom'

export default function LandingPage() {

    return (
        <>
            <div class="container-fluid title" id="howItWorks">
                <h1>How it works</h1>
                <h3>Encryption</h3>
                <p>
                    Each user supplying a separate secret key. Both keys are hashed using the <a href="https://en.wikipedia.org/wiki/SHA-2">Secure Hash Algorithm 256</a> method, and combined using the Diffie-Hellman Key Exchange method to create the main encryption key. The message is then encrypted using the <a href="https://en.wikipedia.org/wiki/SHA-2">Advanced Encryption Standard 256</a> method. Once the message has been encrypted, it is sent via the server to the other user, who decrypts the message at their end using the same method. 
                </p>
                <p>
                    This method of end to end encryption requires both users to know each other's secret keys. It is the method used for encryption by governments across the world, and the encrypted text is considered unbreakable using current code breaking methods. A far simpler target is the unencrypted message at each end of the app, so keep an eye on who is standing behind you!
                </p>
                <br/>
                <h3>Chat Application</h3>
                <p>
                    The application was built using Node.js, React and the chat functionality is facilitates using the <a href="https://socket.io/">Socket.io</a> library.
                </p>
            </div>
        </>
    )
}