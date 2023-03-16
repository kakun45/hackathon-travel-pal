import { useState } from "react"
import axios from "axios"
// import { useParams } from "react-router-dom"


const Main = () => {
    const [zipcode, setZipcode] = useState('')
    // const { zip } = useParams()


    const zipcodeHandler = (e) => {
        setZipcode(e.target.value)
    }

    const sumbitZipcode = (e) => {
        e.preventDefault()
        // console.log(zipcode)
        axios.get(`http://localhost:8000/${zipcode}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                <button>Explore</button>
            </form>
        </>
    )
}

export default Main

// cardList.map(card => {

// })