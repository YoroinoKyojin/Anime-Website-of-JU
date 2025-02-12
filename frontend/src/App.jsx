import {Box, useColorModeValue} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreateLoginPage from "./pages/CreateLoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App(){
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("green.500","gray.900")}>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateLoginPage/>} />
      </Routes>
    </Box>
  );
}

export default App;
