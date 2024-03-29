import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Temp from "./pages/temp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route index element={<HomeScreen />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userhome" element={<HomeScreen />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
