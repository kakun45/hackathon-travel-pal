import "./resultsPage.scss";
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Button from "../components/Button/Button";


const Results = ({ itineraryList, setItineraryList }) => {
  console.log(itineraryList)

  return (
    <main className="result">
      {itineraryList.map(itinerary => {

        return <ItineraryCard

          setItineraryList={setItineraryList}
          image={itinerary.image}
          id={itinerary.id}
          event={itinerary.event}
          time={itinerary.time}
          pplNum={itinerary.attendees}
          key={itinerary.id}
          itineraryList={itineraryList}

        />
      })}
      <div className="result__btn"><Button value={'Finalize'} /></div>
    </main>
  )
};

export default Results;
