import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentification from "./components/Authentification/Authentification";
import Register from "./components/Register/Register";
import Page404 from "./components/Page404/Page404";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./components/Login/Login";
import Oferts from "./pages/Oferts/Oferts";
import Profile from "./pages/Profile/Profile";


function App() {



  return (

    <Router>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/oferts" element={<Oferts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
