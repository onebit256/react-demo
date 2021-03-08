import Menu from './components/Menu';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Contract from './components/content/Contract';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
import AuthService from './services/AuthService';
import {UserContext} from './context/currentUser'


function App() {

  const userContext = useContext(UserContext);

  return (
  <div>
    <Switch>
     {userContext.currentUser === null ? 
     
      <Route path="/login">
      <Login />
      </Route> :
      <div>
     
      <body className="layui-layout-body">
        <div className="App">
          <div className="layui-layout layui-layout-admin">
            <Menu/>
            <div class="layui-side layui-bg-black">
              <SideBar/>
            </div>
            <div className="layui-body">

            <Route exact path="/">
            </Route>
            <Route path="/contract">
              <Contract/>
            </Route>

            </div>
            <div className="qkl-container">
        </div>
        </div>
        </div>
      </body>
      </div>
      }
    
    </Switch>
  </div>
  );
}

export default App;
