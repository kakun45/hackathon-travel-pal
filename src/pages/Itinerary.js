import ItineraryCard from "../components/ItineraryCard/ItineraryCard"
import './Itinerary.scss'

const Itinerary = ({ itineraryList, setItineraryList }) => {



    return (

        itineraryList.map(itinerary => {
            return (
              <ItineraryCard
                setItineraryList={setItineraryList}
                image={itinerary.image}
                id={itinerary.id}
                event={itinerary.event}
                time={itinerary.time}
                pplNum={itinerary.attendees}
              />
            );
        })
    )
}

export default Itinerary


