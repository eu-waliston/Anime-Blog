import { Routes, Route } from "react-router-dom";


import Login from "../components/User/Login";
import Recover from "../components/User/Recover";
import Register from "../components/User/Register";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={[<Navbar />, <Home /> ]} />

      <Route path="/login" element={<Login />} />
      <Route path="/recover" element={<Recover />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  );
};

export default AllRoutes;
