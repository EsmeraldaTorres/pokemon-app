import { useSelector } from "react-redux";
import "./App.css";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokeDetailPage from "./pages/PokeDetailPage";
import { Route } from "react-router-dom";
import ProtectetRoutes from "./pages/ProtectetRoutes";

function App() {
  const trainer = useSelector((states) => {
    states.trainer;
  });

  console.log(trainer, "trainer");
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectetRoutes />}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:name" element={<PokeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
