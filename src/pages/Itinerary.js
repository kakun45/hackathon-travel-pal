import ItineraryCard from "../components/ItineraryCard/ItineraryCard"

const Itinerary = ({ itineraryList, setItineraryList }) => {



    return (

        itineraryList.map(itinerary => {
            < ItineraryCard
                setItineraryList={setItineraryList}
                image={itinerary.image}
                id={itinerary.id}
                event={itinerary.event}
                time={itinerary.time}
                pplNum={itinerary.attendees} />
        })
    )
}

export default Itinerary


