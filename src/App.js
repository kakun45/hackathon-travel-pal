import './App.scss';
import './styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import Itinerary from "./pages/Itinerary";
import Results from "./pages/resultsPage";
import Final from './pages/final';

function App() {
  const [itineraryList, setItineraryList] = useState([]);
  const [arrLength, setArrLength] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
          <Main 
            setItineraryList={setItineraryList} 
            itineraryList={itineraryList} 
            setArrLength={setArrLength} 
            arrLength={arrLength} />}
        />

        <Route
          path="/itinerary"
          element={
            <Itinerary
              setItineraryList={setItineraryList}
              itineraryList={itineraryList}
              arrLength={arrLength}
              setArrLength={setArrLength}
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
