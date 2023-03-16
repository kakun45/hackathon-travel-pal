import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


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
                <label htmlFor="zipcode">Select your Zipcode</label>
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
                {/* <Button value={'Explore'} /> */}
                <button>sumbit</button>
            </form>
        </>
    )
}

export default Main

