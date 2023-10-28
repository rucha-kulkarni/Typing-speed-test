import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Statistics from "./Components/Statistics";
import Typingbox from "./Components/Typingbox";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";

const App = () => {
    let user = localStorage.getItem("user");

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/typing-speed-test" element={<Typingbox />} />
                <Route path="/statics" element={<Statistics />} />
                {user} ? <Route path="/login" element={<Login />} /> :{" "}
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;