import Home from './pages/home';
import Dash from './pages/dash';
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
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App
