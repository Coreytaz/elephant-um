import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hook/useTheme";
import Home from "./pages/Home";


function App() {
  const { setTheme } = useTheme();

  return (
    <Routes>
      <Route path="/elephant-um" element={<Home setTheme={setTheme} />} />
    </Routes>
  );
}

export default App;
