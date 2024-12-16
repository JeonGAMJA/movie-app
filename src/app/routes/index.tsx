import { Route, Routes } from "react-router-dom";
import "../../f_shared/styles/App.css";
import Home from "../../b_pages/Home";
import Detail from "../../b_pages/Detail";
import Login from "../../b_pages/Login";
import Signup from "../../b_pages/Signup";
import Layout from "./Layout";
import Search from "../../b_pages/Search";
import Like from "../../b_pages/Like";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/like" element={<Like />} />
      </Route>
    </Routes>
  );
}

export default App;
