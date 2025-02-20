/*import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { HomePage } from './Components/HomePage/HomePage'; // Import HomePage
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
  
    return (
<Router>
  <Routes>
    <Route path="/" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
    <Route 
      path="/home" 
      element={isAuthenticated ? (
        <>
          <Navbar />  
          <HomePage />
        </>
      ) : <Navigate to="/" />} 
    />
  </Routes>
</Router>

    );
  }
export default App;*/

import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { HomePage } from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const eventsRef = useRef(null);

    const scrollToEvents = (e) => {
        e.preventDefault();
        if (eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
                
                <Route 
                    path="/home" 
                    element={isAuthenticated ? (
                        <>
                            <Navbar scrollToEvents={scrollToEvents} />  
                            <HomePage scrollToEvents={scrollToEvents} ref={eventsRef} />
                        </>
                    ) : <Navigate to="/" />} 
                />
            </Routes>
        </Router>
    );
}

export default App;
