import Card from "./";

const Results = ({ CHANGEmeCardData }) => {
  return (
    <>
      <div className="CHANGE-ME-card">
        <ul className="CHANGE-ME-listParent">
          <li>
            <img className="CHANGE-ME-img" src={CHANGEmeCardData.image}>
              <iternaryCard />
            </img>
          </li>
        </ul>
      </div>{" "}
    </>
  );
};

export default Results;
