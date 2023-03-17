import ItineraryCard from "../components/ItineraryCard/ItineraryCard"
import './Itinerary.scss'
// import pin from '../assets/images/one.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import four from '../assets/images/four.png'
import five from '../assets/images/five.png'

import Button from "../components/Button/Button"

const Itinerary = ({ itineraryList, setItineraryList }) => {



    return (
        <main className="itinerary">
            <div className="itinerary__circle"></div>
            <div className="itinerary__nearYou">You have {itineraryList.length || 0} {`${itineraryList.length > 1 ? 'events' : 'event'}`} near you</div>
            <img className="itinerary__pin"
                src={itineraryList.length === 2 ? two
                    : itineraryList.length === 3 ? three
                        : itineraryList.length === 4 ? four
                            : itineraryList.length === 5 ? five
                                : two}
                alt="pinpoint" />
            {itineraryList.map(itinerary => {
                < ItineraryCard
                    setItineraryList={setItineraryList}
                    image={itinerary.image}
                    id={itinerary.id}
                    event={itinerary.event}
                    time={itinerary.time}
                    pplNum={itinerary.attendees} />
            })}
            <div className="itinerary__btn"><Button value={'Explore'} /></div>
        </main>


    )
}

export default Itinerary


