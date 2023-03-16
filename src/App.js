// import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/itinerary' element={<Itinerary />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
