import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PokemonDetails from "./page/PokemonDetails.page";

function App() {
  return (
    <div className="grid grid-rows-[100px_1fr] h-screen bg-slate-700">
      <Router>
        <div className="">
          <Header />
        </div>

        <div className="p-5 m-3 rounded-xl bg-white overflow-y-scroll">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:name" element={<PokemonDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
