import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Card = ({ name, type, id }) => {
  const { store, actions } = useContext(Context);

  const handleFavorite = () => {
    const item = { name, type, id };
    actions.addFavorite(item);
  };
const defaultImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
  return (
    <div>
      <div className="card" style={{ width: "18rem",  margin: "0.5rem", display: "flex" }}>
      <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          className="card-img-top"
          alt={name}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = defaultImage; 
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/single/${type}/${id}`} className="btn btn-primary me-5">
            Learn more
          </Link>
          <button onClick={handleFavorite} className="btn btn-outline-warning">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
