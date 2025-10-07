import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Pricing from "@/components/Pricing";
import "@/styles/tailwind.css";
import "@/styles/global.scss";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Register from "@/components/Register";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/components/Dashboard";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";
import { useSelector } from "react-redux";
import { token } from "./models/selectors/userSelectors";

const App = () => {
  const userToken = useSelector(token);

  console.log(userToken);
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* 🔸 Public pages (Header/Footer) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* 🔸 Dashboard (χωρίς Header/Footer) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={userToken}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
