import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { HomePage } from './Components/HomePage/HomePage'; // Import HomePage
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
