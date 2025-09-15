import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/components/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        {/* {userToken && <Header />} */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
