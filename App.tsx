import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}
