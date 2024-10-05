import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"; // Importa el contexto para acceder al store y las acciones

export const Home = () => {
  // Acceder al store y actions desde el contexto
  const { store, actions } = useContext(Context);

  // Llamar a la función que obtiene los planetas cuando el componente se monta
  useEffect(() => {
    actions.fetchPlanetsData();
    actions.fetchPeopleData();
    actions.fetchStarshipsData();
    actions.fetchFilmsData();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Lista de Films</h1>
      {/* Mostrar la lista de planetas desde el store */}
      <ul>
        {store.films?.length > 0 ? (
          store.films.map((film, index) => (
            <li key={index}>
              {film.title} - Dirigida por: {film.director}
            </li> // Renderizar cada planeta
          ))
        ) : (
          <li>Cargando films...</li> // Mensaje mientras se cargan los planetas
        )}
      </ul>

      <h1>Lista de Planetas</h1>
      {/* Mostrar la lista de planetas desde el store */}
      <ul>
        {store.planets.length > 0 ? (
          store.planets.map((planet, index) => (
            <li key={index}>{planet.name}</li> // Renderizar cada planeta
          ))
        ) : (
          <li>Cargando planetas...</li> // Mensaje mientras se cargan los planetas
        )}
      </ul>
      <h1>Lista de People</h1>
      <ul>
        {store.people.length > 0 ? (
          store.people.map((people, index) => (
            <li key={index}>{people.name}</li> // Renderizar cada planeta
          ))
        ) : (
          <li>Cargando people...</li> // Mensaje mientras se cargan los planetas
        )}
      </ul>
      <h1>Lista de starships</h1>
      <ul>
        {store.starships.length > 0 ? (
          store.starships.map((starship, index) => (
            <li key={index}>{starship.name}</li> // Renderizar cada planeta
          ))
        ) : (
          <li>Cargando starships...</li> // Mensaje mientras se cargan los planetas
        )}
      </ul>
    </div>
  );
};
