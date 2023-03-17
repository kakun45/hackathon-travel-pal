import { useState } from "react"
import axios from "axios"
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import Button from "./Button/Button";
import "./Main.scss";
=======
import { useNavigate } from 'react-router-dom'
import Button from "./Button/Button"

>>>>>>> 71f8bb8f01a61bbe5b263e963e013de18f633346

const Main = ({ setItineraryList }) => {
    const [zipcode, setZipcode] = useState('')
    const navigate = useNavigate()


    const zipcodeHandler = (e) => {
        setZipcode(e.target.value)
    }

    const sumbitZipcode = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/${zipcode}`)
            .then(res =>
                setItineraryList(res.data)
            )
            .catch(err => console.log(err))
        navigate('/itinerary')
    }
    return (
        <>
            <form className="form" onSubmit={sumbitZipcode}>
                <label htmlFor="zipcode" className="form__title">Select your Zipcode</label>
                <select
                    placeholder="Zipcode"
                    id="zipcode"
                    name="zipcode"
                    className="form__zipcode"
                    value={zipcode}
                    onChange={zipcodeHandler}>
                    <option value=''>Zipcode</option>
                    <option value={89104}>89104</option>
                    <option value={89101}>89101</option>
                    <option value={89183}>89183</option>
                    <option value={89108}>89108</option>
                    <option value={89109}>89109</option>
                </select>
<<<<<<< HEAD
                <div className="button">
                    <Button value={'EXPLORE'} />
                </div>
=======
                <Button value={'Explore'} />
>>>>>>> 71f8bb8f01a61bbe5b263e963e013de18f633346
            </form>
        </>
    )
}

export default Main

