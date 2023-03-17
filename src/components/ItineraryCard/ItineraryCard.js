import "./ItineraryCard.scss";
import Button from "../Button/Button";
import blackX from '../../assets/images/blackx.png'

const ItineraryCard = ({
  event,
  time,
  pplNum,
  id,
  image,
  setItineraryList,
  itineraryList
}) => {

  // set funtion to delete unwanted event
  function removeEvent(eventId) {
    let filteredList = itineraryList.filter(event => event.id !== eventId)
    setItineraryList(filteredList)
    console.log('clicked')
  }

  console.log(event, time, pplNum, id, image)

  return (

    <div className="card-container">
      <ul className="card__data">
        <div className="card__img-parent">
          <img className="card__img" src={image} alt="vegas location"></img>
          <div className="card__overlay"></div>
        </div>
        <div className="card--li-wrapper">
          <li className="card__li data-time">Time: {time}</li>
          <li className="card__li data-event">{event}</li>
          <li className="card__li data-pplNum">{pplNum} ppl are going</li>
        </div>
        <div className="card__buttons">
          <li><Button className="card__btn--msg" value={'Message'} /></li>
          <li><Button className="card__btn--join" value={'Click to Join'} /></li>
        </div>
      </ul>
      <div onClick={() => removeEvent(id)}
        className="delete-wrapper">
        <img className="delete__img" src={blackX} />
      </div>
    </div>
  );
};

export default ItineraryCard;


