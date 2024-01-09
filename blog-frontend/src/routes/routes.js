import { Routes, Route } from "react-router-dom";


import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={[<Navbar />, <Home /> ]} />
    </Routes>
  );
};

export default AllRoutes;
