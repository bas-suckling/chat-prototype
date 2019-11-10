import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import '../src/components/ChatApp/ChatApp.css';
import '../src/components/NavBar/NavBar.css';
import '../src/components/Footer/Footer.css';
import '../src/components/LandingPage/LandingPage.css'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
