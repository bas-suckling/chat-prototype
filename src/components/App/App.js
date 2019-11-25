import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import ChatApp from '../ChatApp/ChatApp'
import Store from '../ChatApp/Store'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Signup from  '../Signup/Signup'
import Howitworks from '../Howitworks/Howitworks'
import SignIn from '../SignIn/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/howitworks" component={Howitworks}/>
        <Route exact path="/chat" render={props => {
          return (
            <Store>
              <ChatApp />
            </Store>
          )
        }}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
