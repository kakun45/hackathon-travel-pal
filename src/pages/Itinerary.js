import ItineraryCard from "../components/ItineraryCard/ItineraryCard"

const Itinerary = ({ itineraryList, setItineraryList }) => {

    function filtereLOutCards(arrOfObj, eventId) {
        return arrOfObj.filter((obj) => obj.id === eventId);
    }
    return (

        itineraryList.map(itinerary => {
            <ItineraryCard
                event={itinerary.event}
                time={itinerary.time}
                pplNum={itinerary.attendees} />
        })
    )
}

export default Itinerary


