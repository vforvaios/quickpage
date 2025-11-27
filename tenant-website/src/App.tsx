import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/components/Home";
import "@/styles/tailwind.css";
import "@/styles/global.scss";
import PublicLayout from "@/layouts/PublicLayout";
import { parse } from "tldts";

const App = () => {
  const subDomain = parse(window.location.hostname).subdomain;

  console.log(subDomain);
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
