import React from 'react';
import ChatApp from './ChatApp'
import Store from './Store'

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
