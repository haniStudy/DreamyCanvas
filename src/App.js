import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DrawingBoard from "./pages/DrawingBoard";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/drawing_board" element={<DrawingBoard />}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;
