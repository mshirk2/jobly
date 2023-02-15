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
  const [applications, setApplications] = useState(new Set([]));

  console.log("App applications=", applications);

  useEffect(function getUserOnMount(){

    async function getCurrentUser(){
      if (token){
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplications(new Set(currentUser.applications));
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

  function hasApplied(id){
    return applications.has(parseInt(id));
  }

  async function applyToJob(id){
    if (hasApplied(id)) return;
    id = parseInt(id);
    JoblyApi.applyToJob(currentUser.username, id);
    setApplications(new Set([...applications, id]));
  }

  if (!infoLoaded) return <Spinner />

  return (
    <BrowserRouter>
      <UserContext.Provider 
        value={{
          currentUser, 
          setCurrentUser, 
          hasApplied, 
          applyToJob,
        }}
      >
        <div className="App">
          <NavBar logout={logout} />         
          <Routes signup={signup} login={login} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
