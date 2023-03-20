import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
