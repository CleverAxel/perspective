import React from "react";
import { Route, Routes } from "react-router";
const LazyHome = React.lazy(() => import("./pages/home/home"));
const LazyFormations = React.lazy(() => import("./pages/formations/formations"));
const LazyWhoAreWe = React.lazy(() => import("./pages/whoAreWe/whoAreWe"));
function App() {
  return (
    <Routes>


      <Route path="/" 
      element={
        <React.Suspense fallback={"loading..."}>
          <LazyHome></LazyHome>
        </React.Suspense>
      }>
      </Route>


      <Route path="/formations" 
      element={
        <React.Suspense fallback={"loading..."}>
          <LazyFormations></LazyFormations>
        </React.Suspense>
      }>
      </Route>

      <Route path="/qui-sommes-nous"
      element={
        <React.Suspense fallback={"loading"}>
          <LazyWhoAreWe></LazyWhoAreWe>
        </React.Suspense>
      }>
      </Route>
      
    </Routes>
  );
}

export default App;
