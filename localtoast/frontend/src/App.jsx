import { useState } from 'react'
import SplashToast from './components/animation-test'

import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './styles/bootstrap.min-toast.css'
import './App.css'
import './styles/fonts.css'

// function App({username}) {
function App() {
  console.log("username is ", username);
  console.log(window);

  return (
    <>
      <h1 className='indie-flower-regular splash'>Local Toast</h1>
      <div className="card" id='toast-card'>
        <SplashToast />
      </div>
        <p>
          You are logged in as <strong>{username}</strong>.
        </p>
    </>
  )
}

export default App
