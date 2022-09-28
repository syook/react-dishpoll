import { Home, Dishes, Login, Result } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
