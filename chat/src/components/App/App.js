import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ChatApp from '../ChatApp/ChatApp'
import Store from '../ChatApp/Store'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar}/>
        <Route exactpath="/" component={LandingPage}/>
        <Store>
          <ChatApp />
        </Store>
        <Route path='/' component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
