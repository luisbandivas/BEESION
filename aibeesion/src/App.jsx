import { useState } from "react";
import Hero from "./components/Hero";
import Infopage from "./pages/Info";
import Upload from "./pages/Upload";

function App() {
  return (
    <div className="bg-[#fffbf4] text-[#212529] font-Poppins">
      <Hero />
      <Infopage />
      <Upload />
    </div>
  );
}

export default App;
