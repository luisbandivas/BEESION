import { useState } from "react";
import Hero from "./components/Hero";
import Infopage from "./pages/Info";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FBF9F1] text-[#212529] font-Poppins">
      <Hero />
      <Infopage />
      <Upload />
      <Footer />
    </div>
  );
}

export default App;
