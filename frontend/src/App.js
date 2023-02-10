import React, { useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import jwt from "jsonwebtoken";
import JoblyApi from './api';
import UserContext from './UserContext';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(function getUserOnMount(){

    async function getCurrentUser(){
      if (token){
        let {username} = jwt.decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      }
    }

    getCurrentUser();
  }, [token]);
  


  async function signup(signupData){
    let token = await JoblyApi.signup(signupData);
    setToken(token);
    return {success: true}
  }

  async function login(loginData){
    let token = await JoblyApi.login(loginData);
    setToken(token);
    return {success: true}
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{currentUser, setCurrentUser}}>
        <div className="App">
          <NavBar />
          <Routes signup={signup} login={login}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
