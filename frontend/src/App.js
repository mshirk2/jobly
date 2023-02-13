import React, { useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from "jsonwebtoken";
import JoblyApi from './api';
import UserContext from './UserContext';
import NavBar from './NavBar';
import Routes from './Routes';
import {Spinner} from 'reactstrap';
import './App.css';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("jobly-token");
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function getUserOnMount(){

    async function getCurrentUser(){
      if (token){
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err){
          console.error(err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    getCurrentUser();
  }, [token]);

  async function signup(signupData){
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true}
    } catch (errors) {
      console.error(errors);
      return {success: false, errors}
    }
    
  }

  async function login(loginData){
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true}
    } catch (errors) {
      console.error(errors);
      return {success: false, errors}
  }
  }

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  if (!infoLoaded) return <Spinner />

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{currentUser, setCurrentUser}}>
        <div className="App">
          <NavBar logout={logout} />         
          <Routes signup={signup} login={login}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
