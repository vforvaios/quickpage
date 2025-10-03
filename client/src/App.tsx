import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import "./styles/tailwind.css";
import "./styles/global.scss";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Register from "./components/Register";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        {/* {userToken && <Header />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
