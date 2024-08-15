import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import SignUp2 from "./pages/signup/SignUp2";
import SignUp3 from "./pages/signup/SignUp3";
import SignUp4 from "./pages/signup/SignUp4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup2" element={<SignUp2 />} />
      <Route path="/signup3" element={<SignUp3 />} />
      <Route path="/signup4" element={<SignUp4 />} />
    </Routes>
  );
}

export default App;
