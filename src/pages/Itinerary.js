import ItineraryCard from "../components/ItineraryCard/ItineraryCard"
import './Itinerary.scss'
import pin from '../assets/images/Map-Pin.png'
import two from '../assets/images/two.png'

const Itinerary = ({ itineraryList, setItineraryList }) => {



    return (
        <main className="itinerary">
            <div className="itinerary__circle"></div>
            <div className="itinerary__nearYou">You have {itineraryList.length || 0} {`${itineraryList.length > 1 ? 'events' : 'event'}`} near you</div>
            <img className="itinerary__pin" src={two} alt="pinpoint" />
            {itineraryList.map(itinerary => {
                < ItineraryCard
                    setItineraryList={setItineraryList}
                    image={itinerary.image}
                    id={itinerary.id}
                    event={itinerary.event}
                    time={itinerary.time}
                    pplNum={itinerary.attendees} />
            })}
        </main>


    )
}

export default Itinerary


