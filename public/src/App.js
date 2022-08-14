import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/setAvatar' element={<SetAvatar />} />
                <Route path='/' element={<Chat />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
