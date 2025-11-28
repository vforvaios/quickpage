import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/components/Home";
import "@/styles/tailwind.css";
import "@/styles/global.scss";
import PublicLayout from "@/layouts/PublicLayout";
import { parse } from "tldts";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const subDomain = parse(window.location.hostname).subdomain;

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home tenant={subDomain} />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
