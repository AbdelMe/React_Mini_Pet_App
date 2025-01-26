import React from "react";
import { Route, Routes } from "react-router-dom";
import Adopt from "./components/PetDetails/Adopt";

export default function Content() {
  return (
    <>
      <Routes>
        <Route path="/adopt" element={<Adopt></Adopt>}></Route>
      </Routes>
    </>
  );
}
