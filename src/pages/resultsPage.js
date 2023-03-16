import ItineraryCard from "../components/ItineraryCard/ItineraryCard";

const Results = ({ image, event, time, pplNum }) => {
  return (
    <>
      <div className="CHANGE-ME-card">
        <ul className="CHANGE-ME-listParent">
          <li>
            <img className="CHANGE-ME-img" src={image}>
              <ItineraryCard />
            </img>
          </li>
        </ul>
      </div>{" "}
    </>
  );
};

export default Results;
