import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"; // Importa el contexto para acceder al store y las acciones

export const Home = () => {
  // Acceder al store y actions desde el contexto
  const { store, actions } = useContext(Context);

  // Llamar a la función que obtiene los datos cuando el componente se monta
  useEffect(() => {
    actions.fetchPlanetsData();
    actions.fetchPeopleData();
    actions.fetchStarshipsData();
    actions.fetchFilmsData();
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="row">
        {/* Lista de Films */}
        <div className="col-md-3">
          <h2>Lista de Films</h2>
          <ul className="list-group">
            {store.films?.length > 0 ? (
              store.films.map((film, index) => (
                <li key={index} className="list-group-item">
                  {film.title} - Dirigida por: {film.director}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando films...</li>
            )}
          </ul>
        </div>

        {/* Lista de Planetas */}
        <div className="col-md-3">
          <h2>Lista de Planetas</h2>
          <ul className="list-group">
            {store.planets.length > 0 ? (
              store.planets.map((planet, index) => (
                <li key={index} className="list-group-item">
                  {planet.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando planetas...</li>
            )}
          </ul>
        </div>

        {/* Lista de People */}
        <div className="col-md-3">
          <h2>Lista de People</h2>
          <ul className="list-group">
            {store.people.length > 0 ? (
              store.people.map((people, index) => (
                <li key={index} className="list-group-item">
                  {people.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando people...</li>
            )}
          </ul>
        </div>

        {/* Lista de Starships */}
        <div className="col-md-3">
          <h2>Lista de Starships</h2>
          <ul className="list-group">
            {store.starships.length > 0 ? (
              store.starships.map((starship, index) => (
                <li key={index} className="list-group-item">
                  {starship.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando starships...</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
