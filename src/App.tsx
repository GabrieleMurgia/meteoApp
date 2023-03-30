import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Favorites } from "./views/Favorites/Favorites";
import { Home } from "./views/Home/Home";
import classes from "./App.module.css"
import { CityDetails } from "./views/CityDetails/CityDetails";
import { ToastContainer } from 'react-toastify';




function App() {
  
  
  return (
    <div className={classes["App"]}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/city/:cityId" element={<CityDetails />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;