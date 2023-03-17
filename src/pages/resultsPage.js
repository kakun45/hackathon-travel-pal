import "./resultsPage.scss";
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";
import Button from "../components/Button/Button";
import { useNavigate } from 'react-router-dom';



const Results = ({ itineraryList, setItineraryList }) => {
  function toLocaleTimeString(timestamp) {
    let date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("default");
  }
  console.log(itineraryList);
  // todo fix sort here before mapping
  const navigate = useNavigate()


  function moveToFinalize() {
    navigate('/final')

  }

  return (
    <main className="result">
      {itineraryList.sort().map((itinerary) => {
        return (
          <ItineraryCard
            key={itinerary.id}
            setItineraryList={setItineraryList}
            image={itinerary.image}
            id={itinerary.id}
            event={itinerary.event}
            time={toLocaleTimeString(itinerary.time)}
            pplNum={itinerary.attendees}
            itineraryList={itineraryList}
          />
        );
      })}
      <div onClick={moveToFinalize} className="result__btn"><Button value={'Finalize'} /></div>
    </main>
  );
};

export default Results;
