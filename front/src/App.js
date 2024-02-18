import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import TendenciasPage from "./pages/TendenciasPage";
import InicioPage from "./pages/InicioPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="Tendencias" element={<TendenciasPage />} />
          <Route path="Blog" element={<BlogPage />} />
          <Route path="Contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
