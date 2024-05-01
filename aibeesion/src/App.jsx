import { useState } from "react";
import Hero from "./components/Hero";
import Infopage from "./pages/Info";
import Upload from "./pages/Upload";
import Burat from "./pages/burat";

function App() {
  return (
    <div>
      <Hero />
      <Infopage />
      <Upload />
    </div>
  );
}

export default App;
