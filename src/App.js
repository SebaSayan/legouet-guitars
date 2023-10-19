import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuildAndCoast from "./pages/BuildAndCoast";
import Guitars from "./pages/Guitars";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import Confidentiality from "./pages/Confidentiality";
import ScrollToTopButton from "./components/ScrollToTopButton";
import GuitarJazzFusion from "./pages/guitars/GuitarJazzFusion";
import GuitarMetalPrecision from "./pages/guitars/GuitarMetalPrecision";
import GuitarStudio from "./pages/guitars/GuitarStudio";
import GuitarRock from "./pages/guitars/GuitarRock";
import GuitarSupreme from "./pages/guitars/GuitarSupreme";
import GuitarUltime from "./pages/guitars/GuitarUltime";
import GuitarCamoBlue from "./pages/guitars/GuitarCamoBlue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build-and-cost" element={<BuildAndCoast />} />
        <Route path="/guitares" element={<Guitars />} />
        <Route path="/guitares/jazz-fusion" element={<GuitarJazzFusion />} />
        <Route path="/guitares/metal-precision" element={<GuitarMetalPrecision />} />
        <Route path="/guitares/studio" element={<GuitarStudio />} />
        <Route path="/guitares/rock" element={<GuitarRock />} />
        <Route path="/guitares/supreme" element={<GuitarSupreme />} />
        <Route path="/guitares/ultime" element={<GuitarUltime />} />
        <Route path="/guitares/camo-blue" element={<GuitarCamoBlue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentiality />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
