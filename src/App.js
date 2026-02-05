import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TeamDetails from "./components/TeamDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/teams/:teamId" element={<TeamDetails />} />
    </Routes>
  );
}

export default App;
