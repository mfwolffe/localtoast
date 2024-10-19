import Home from './pages/home';
import SearchBar from './pages/search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/bootstrap.min-toast.css'
import './App.css'
import './styles/fonts.css'

// function App({username}) {
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App
