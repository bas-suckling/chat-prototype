import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import ChatApp from '../ChatApp/ChatApp'
import Store from '../ChatApp/Store'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Signup from  '../Signup/Signup'
import Login from '../Login/Login'
import Howitworks from '../Howitworks/Howitworks'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar}/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/howitworks" component={Howitworks}/>
        {/* <Store>
          <ChatApp />
        </Store> */}
        <Route path='/' component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
