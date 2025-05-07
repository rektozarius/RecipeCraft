import FavoriteButton from "./FavoriteButton";
import "./Title.css";

// Title component for ingredient modal
function Title({ name }) {
  return (
    <>
      <div className="title-container">
        <h1 className="title-container--title">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <FavoriteButton name={name} />
      </div>
    </>
  );
};

export default Title;