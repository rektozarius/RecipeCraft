import FavoriteButton from "./FavoriteButton";
import "./Title.css";

function Title({ name }) {
  return (
    <>
      <div className="title-container">
        <h1 className="title-container--title">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <FavoriteButton ingredientId={name} />
      </div>
    </>
  );
};

export default Title;