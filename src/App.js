import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';
import NavBar from './components/NavBar';
import Footers from './components/Footers';
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={
            <>
              <NavBar />
              <Home />
              <Footers />
            </>
          } />

          <Route path="/contact" element={
            <>
              <NavBar />
              <Contact />
              <Footers />
            </>
          } />

          <Route path="/about" element={
            <>
              <NavBar />
              <About />
              <Footers />
            </>
          } />

          <Route path="/store" element={
            <>
              <NavBar />
              <Store />
              <Footers />
            </>
          } />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
