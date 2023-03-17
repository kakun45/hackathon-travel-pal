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

  return (
    <>
      <div className="card-container">
        <ul className="card__data">
          <div className="card__img-parent">
            <img className="card__img" src={image} alt="vegas location"></img>
          </div>
          <li className="data-time">Time: {time}</li>
          <li className="data-event">Event: {event}</li>
          <li className="data-pplNum">Group size: {pplNum}</li>
        </ul>
      </div>
    </>
  );
};

export default ItineraryCard;
