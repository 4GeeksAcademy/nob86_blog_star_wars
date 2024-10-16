import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "/workspaces/nob86_blog_star_wars/src/img/Captura de pantalla 2024-10-17 a las 1.13.07.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <Link to="/">
        <span className="navbar-brand mb-0 h1"><img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} className="mx-3"/></span>
      </Link>
      <div className="ml-auto d-flex align-items-center">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle me-3"
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
              <li className="dropdown-item ">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
