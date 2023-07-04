import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuildAndCoast from "./pages/BuildAndCoast";
import Guitars from "./pages/Guitars";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build-and-cost" element={<BuildAndCoast />} />
        <Route path="/guitares" element={<Guitars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
