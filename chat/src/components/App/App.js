import React from 'react';
import ChatApp from '../ChatApp/ChatApp'
import Store from '../ChatApp/Store'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Store> 
        <ChatApp />
      </Store>
      <Footer></Footer>
    </div>
  );
}

export default App;
