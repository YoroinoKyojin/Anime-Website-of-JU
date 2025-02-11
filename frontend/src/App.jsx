import {Box, useColorModeValue,Image} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App(){
  const Demo = () => {
    return (
      <Image
        src="https://i.pinimg.com/736x/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg"
        alt="Naruto vs Sasuke"
        aspectRatio={16 / 9}
        width="300px"
         htmlWidth="180000000px"
      htmlHeight="1900000000px"
      />
    )
  }
  return (
    <Box minH={"100vh"} bg={useColorModeValue("green.500","gray.900")}>
    <Navbar />
    <Demo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>
  );
}

export default App;
