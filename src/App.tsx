import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
