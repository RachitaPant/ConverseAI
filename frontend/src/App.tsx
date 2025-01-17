import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

const App = () => {
  console.log(useAuth()?.isLoggedIn);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
