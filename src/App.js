
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./home";
import Dashboard from "./dashboard";
import JokeTime from "./joketime";
import NotFound from "./404";
import ContactUs from "./contact-us";
import Register from "./register";
import LogIn from "./login";
import "../src/index.css";
import AdminDashboard from "./admin/dashboard"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/joketime" element={<JokeTime/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Route>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
