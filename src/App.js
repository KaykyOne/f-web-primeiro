import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Store from "./pages/Store";
import Painel from './pages/Painel';
import Product from './pages/Product';
import Brand from './pages/Brand';

import PublicLayout from './components/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout público */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Route>

        {/* Layout do painel */}
        <Route path="/painel" element={<Painel />}>
          <Route path="products" element={<Product />} />
          <Route path="brand" element={<Brand />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
