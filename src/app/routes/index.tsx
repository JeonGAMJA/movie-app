import { Route, Routes } from "react-router-dom";
import "../../shared/styles/App.css";
import Home from "../../pages/Home";
import Detail from "../../pages/Detail";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
