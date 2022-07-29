import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hook/useTheme";
import Home from "./pages/Home";
import HomeDark from "./pages/HomeDark";

function App() {
  const { setTheme } = useTheme();

  return (
    <Routes>
      <Route path="/elephant-um" element={<Home setTheme={setTheme} />} />
      <Route path="/elephant-um/dark" element={<HomeDark setTheme={setTheme} />} />
    </Routes>
  );
}

export default App;
