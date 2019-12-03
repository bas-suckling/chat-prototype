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
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated/Authenticated'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={}
  }

  
  render() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar}/>
        <Route exact path="/howitworks" component={Howitworks}/>
        <IfNotAuthenticated>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={SignIn}/>
        </IfNotAuthenticated>
        <IfAuthenticated>
        <Route exact path="/chat" render={props => {
          return (
            <Store >
              <ChatApp />
            </Store>
          )
        }}/>
        </IfAuthenticated>
        <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
