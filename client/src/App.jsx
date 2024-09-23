import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Notfound from './pages/error/Notfound';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Notfound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Homepage />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Navbar />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
      <Footer />
    </AuthProvider>
  );
}

export default App;