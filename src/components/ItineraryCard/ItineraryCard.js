import "./ItineraryCard.scss";

const ItineraryCard = ({
  event,
  time,
  pplNum,
  id,
  image,
  setItineraryList,
}) => {
  // function removeEvent(eventId) {
  //     setItineraryList(preval => preval.filter(preval.id !== eventId))
  //   }

  // onClick = {() => removeEvent(id)}
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
      </ul>
    </div>
  );
};

export default ItineraryCard;


