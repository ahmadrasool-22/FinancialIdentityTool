import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/assessment"
          element={<Assessment />}
        />

        <Route
          path="/results"
          element={<Results />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;