import { useContext, useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./App.scss";
import "./style/dark.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { userInputs, productInputs } from "./formsource";
import { DarkModeContext } from "./context/darkModeContext"

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <BrowserRouter>
      <div className={darkMode ? "single dark" : "single"}>
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
            </Route>
            <Route path="/products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new product" />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
