import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js"
import HomePage from './pages/HomePage.js'
import Contact from './pages/ContactPage.js'
import Policy from './pages/Policy.js'
import PageNotFound from './pages/PageNotFound.js'
import Register from "./pages/Auth/Register.js";
import Login from './pages/Auth/Login.js'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound/>} />

      </Routes>
    </>
  );
}

export default App;
