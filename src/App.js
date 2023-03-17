// import logo from './logo.svg';
import './App.scss';
import './styles/global.scss'
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Itinerary from "./pages/Itinerary";
import { useState } from "react";
import Results from "./pages/resultsPage";
import Final from './pages/final';

function App() {
  const [itineraryList, setItineraryList] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main setItineraryList={setItineraryList} />}
        />

        <Route
          path="/itinerary"
          element={
            <Itinerary
              setItineraryList={setItineraryList}
              itineraryList={itineraryList}
            />
          }
        />
        <Route path="/results" element={<Results
          itineraryList={itineraryList} setItineraryList={setItineraryList} />} />

        <Route path="/final" element={<Final
          itineraryList={itineraryList} setItineraryList={setItineraryList} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
