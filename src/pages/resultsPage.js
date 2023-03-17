import "./resultsPage.scss";
import ItineraryCard from "../components/ItineraryCard/ItineraryCard";
import Button from "../components/Button/Button";
import { useNavigate } from 'react-router-dom';



const Results = ({ itineraryList, setItineraryList }) => {
  console.log(itineraryList)

  const navigate = useNavigate()


  function moveToFinalize() {
    navigate('/final')

  }

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
      <div onClick={moveToFinalize} className="result__btn"><Button value={'Finalize'} /></div>
    </main>
  )
};

export default Results;
