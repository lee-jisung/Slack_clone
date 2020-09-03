import React, { useState } from 'react';
import './App.css';
import Header from './Components/HeaderPage/Header';
import Sidebar from './Components/SidebarPage/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Components/ChatPage/Chat';
import Login from './Components/LoginPage/Login';
import { useStateValue } from './Config/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
