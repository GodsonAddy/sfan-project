import React from "react";
import CSSBaseline from "@mui/material/CssBaseline";
import PrimaryAppBar from "./appbar";
import NavHeader from "./Header";
import SfanFooter from "./sfanfooter";
import SfanInfo from "./sfaninfo";

function App() {
  return (
    <div>
      <CSSBaseline />
      <PrimaryAppBar />
      <NavHeader />
      <SfanInfo />
      <SfanFooter />
    </div>
  );
}

export default App;
