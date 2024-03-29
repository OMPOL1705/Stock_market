import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Explore from './pages/Explore';
import Chat from './pages/Chat';
import Graph from "./components/dash/Graph";
import Graphslide from "./components/Graphslide";

function App() {
  // const user = localStorage.getItem("token");
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Router>
            <Routes>
                {/* {user && <Route path="/" exact element={<Home />} />} */}
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/graph" element={<Graph  data={"ibm"}/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/graphslide" element={<Graphslide />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/chat" element={<Chat />} />
                {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
            </Routes>
          </Router>
        </StockContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
