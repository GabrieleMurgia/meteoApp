import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Favorites } from "./views/Favorites/Favorites";
import { Home } from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;