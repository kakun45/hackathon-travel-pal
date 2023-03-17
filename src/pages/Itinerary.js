import ItineraryCard from "../components/ItineraryCard/ItineraryCard"
import './Itinerary.scss'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import four from '../assets/images/four.png'
import five from '../assets/images/five.png'
import one from '../assets/images/one.png'
import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';
import { useRef } from "react"


const Itinerary = ({ itineraryList, setItineraryList, arrLength }) => {
    // set navigate
    const navigate = useNavigate()

    const preLength = useRef()

    // set btn handler not working
    const sendResult = () => {
        navigate('/results')
    }
    console.log()
    // Object.keys
    return (
        <main className="itinerary">
            <div className="itinerary__circle"></div>
            <div className="itinerary__nearYou">You have {

                arrLength || 0} {`${arrLength ? ' events' : ' event'}`}
                near you</div>

            <img className="itinerary__pin"
                src={itineraryList.length === 2 ? two
                    : itineraryList.length === 3 ? three
                        : itineraryList.length === 4 ? four
                            : itineraryList.length === 5 ? five
                                : one}
                alt="pinpoint" />

            <div className="itinerary__btn" onClick={sendResult}><Button className="itinerary__btn" value={'Explore'} /></div>
        </main>


    )
}

export default Itinerary


