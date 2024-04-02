// Import elements from React router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages for routing
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Declared paths with endpoints for respective modules under Routes for routing pages */}
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
