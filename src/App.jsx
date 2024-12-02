import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Company from './pages/Company';
import Career from './pages/Career';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const excludedRoutes = ['/signin'];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/company' element={<Company />} />
        <Route path='/career' element={<Career />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

