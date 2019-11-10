import React from 'react';
import ChatApp from '../ChatApp/ChatApp'
import Store from '../ChatApp/Store'

function App() {
  return (
    <div className="App">
      <Store> 
        <ChatApp />
      </Store>
    </div>
  );
}

export default App;
