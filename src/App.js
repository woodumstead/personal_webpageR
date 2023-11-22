import './App.css'
import Navbar from './components/navbar/Nav';
import Contact from './components/pages/contact/ContactPage';
import Home from './components/pages/home/HomePage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
