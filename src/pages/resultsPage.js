import "./resultsPage.scss";
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Results = ({ itineraryList, setItineraryList }) => {
  function toLocaleTimeString(timestamp) {
    let date = new Date(timestamp * 1000);
    // let time2 = date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    return date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
  }
  console.log(itineraryList);
  // todo fix sort here before mapping
  const navigate = useNavigate();

  function addMoreZip() {
    navigate('/')
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
      <div className="result__btn">
        {/* <div onClick={moveToFinalize}> <Button value={'Finalize'} /></div> */}
        <div onClick={addMoreZip} ><Button value={'More Events'} /></div>
      </div>
    </main >
  );
};

export default Results;
