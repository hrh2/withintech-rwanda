import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Blogs from "./components/Blogs.jsx";
import Contacts from "./pages/Contacts.jsx";
import Error404 from "./pages/Error404.jsx";
import Programs from "./components/Programs.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Index />} />

        {/* About page */}
        <Route path="/about" element={<About />} />
        {/*  Gallery */}
        <Route path="/gallery" element={<Blogs />} />
          {/*  Programs */}
        <Route path="/programs" element={<Programs />} />
        {/*  Contact Us*/}
        <Route path="/contact-us" element={<Contacts/>} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Error404/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
