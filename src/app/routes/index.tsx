import { Route, Routes } from "react-router-dom";
import "../../f_shared/styles/App.css";
import Home from "../../b_pages/Home";
import Detail from "../../b_pages/Detail";
import Login from "../../b_pages/Login";
import Signup from "../../b_pages/Signup";
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
