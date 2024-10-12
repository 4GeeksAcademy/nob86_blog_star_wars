import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">START WARS</span>
      </Link>
      <div className="ml-auto d-flex align-items-center">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.favoritos.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            {store.favoritos.length > 0 ? (
              store.favoritos.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  {fav.name}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => actions.removeFavorite(fav.name)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
