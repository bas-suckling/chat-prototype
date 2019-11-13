import React from 'react';
import ReactDOM from 'react-dom';
// import './bootstrap.min.css';
// import '../src/components/ChatApp/ChatApp.css';
// import '../src/components/NavBar/NavBar.css';
// import '../src/components/Footer/Footer.css';
// import '../src/components/LandingPage/LandingPage.css'
// import '../src/components/Signup/Signup.css';
// import '../src/components/Login/Login.css';
// import '../src/components/Howitworks/Howitworks.css'

import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
})

// serviceWorker.unregister();
