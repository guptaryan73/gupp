import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Notfound from './pages/error/Notfound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;

