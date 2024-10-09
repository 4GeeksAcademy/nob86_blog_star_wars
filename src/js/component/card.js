import React from "react";

const Card = ({ name, type, id }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem;" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
