import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"; // Importa el contexto para acceder al store y las acciones

export const Home = () => {
  // Acceder al store y actions desde el contexto
  const { store, actions } = useContext(Context);

  // Estados para almacenar el ID seleccionado para cada categoría
  const [selectedPlanetId, setSelectedPlanetId] = useState(null);
  const [selectedPeopleId, setSelectedPeopleId] = useState(null);
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null); // Para vehículos
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(null); // Para especies

  // Llamar a la función que obtiene los datos cuando el componente se monta
  useEffect(() => {
    actions.fetchPlanetsData();
    actions.fetchPeopleData();
    actions.fetchStarshipsData();
    actions.fetchFilmsData();
    actions.fetchVehiclesData(); // Llama a la función de vehículos
    actions.fetchspeciesData(); // Llama a la función de especies
  }, []);

  // Fetch del ítem individual cuando se selecciona un ID
  useEffect(() => {
    if (selectedPlanetId) actions.fetchSinglePlanet(selectedPlanetId);
    if (selectedPeopleId) actions.fetchSinglePeople(selectedPeopleId);
    if (selectedStarshipId) actions.fetchSingleStarship(selectedStarshipId);
    if (selectedFilmId) actions.fetchSingleFilm(selectedFilmId);
    if (selectedVehicleId) actions.fetchSingleVehicle(selectedVehicleId); // Agrega esta línea
    if (selectedSpeciesId) actions.fetchSingleSpecie(selectedSpeciesId); // Agrega esta línea
  }, [selectedPlanetId, selectedPeopleId, selectedStarshipId, selectedFilmId, selectedVehicleId, selectedSpeciesId]);

  return (
    <div className="container text-center mt-5">
      <div className="row">
        {/* Lista de Films */}
        <div className="col-md-3">
          <h2>Lista de Films</h2>
          <ul className="list-group">
            {store.films?.length > 0 ? (
              store.films.map((film, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedFilmId(film.uid)} // Asigna el ID seleccionado
                >
                  {film.title} - Dirigida por: {film.director}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando films...</li>
            )}
          </ul>

          {/* Detalles del Film seleccionado */}
          {store.singleFilm && (
            <div>
              <h4>Detalles del Film</h4>
              <p>Título: {store.singleFilm.properties.title}</p>
              <p>Director: {store.singleFilm.properties.director}</p>
              <p>Productor: {store.singleFilm.properties.producer}</p>
            </div>
          )}
        </div>

        {/* Lista de Planetas */}
        <div className="col-md-3">
          <h2>Lista de Planetas</h2>
          <ul className="list-group">
            {store.planets.length > 0 ? (
              store.planets.map((planet, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedPlanetId(planet.uid)} // Asigna el ID seleccionado
                >
                  {planet.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando planetas...</li>
            )}
          </ul>

          {/* Detalles del Planeta seleccionado */}
          {store.singlePlanet && (
            <div>
              <h4>Detalles del Planeta</h4>
              <p>Nombre: {store.singlePlanet.properties.name}</p>
              <p>Clima: {store.singlePlanet.properties.climate}</p>
              <p>Población: {store.singlePlanet.properties.population}</p>
            </div>
          )}
        </div>

        {/* Lista de People */}
        <div className="col-md-3">
          <h2>Lista de People</h2>
          <ul className="list-group">
            {store.people.length > 0 ? (
              store.people.map((people, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedPeopleId(people.uid)} // Asigna el ID seleccionado
                >
                  {people.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando people...</li>
            )}
          </ul>

          {/* Detalles de la Persona seleccionada */}
          {store.singlePeople && (
            <div>
              <h4>Detalles de la Persona</h4>
              <p>Nombre: {store.singlePeople.properties.name}</p>
              <p>Género: {store.singlePeople.properties.gender}</p>
              <p>Altura: {store.singlePeople.properties.height}</p>
            </div>
          )}
        </div>

        {/* Lista de Starships */}
        <div className="col-md-3">
          <h2>Lista de Starships</h2>
          <ul className="list-group">
            {store.starships.length > 0 ? (
              store.starships.map((starship, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedStarshipId(starship.uid)} // Asigna el ID seleccionado
                >
                  {starship.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando starships...</li>
            )}
          </ul>

          {/* Detalles de la Nave seleccionada */}
          {store.singleStarship && (
            <div>
              <h4>Detalles de la Nave</h4>
              <p>Nombre: {store.singleStarship.properties.name}</p>
              <p>Modelo: {store.singleStarship.properties.model}</p>
              <p>Fabricante: {store.singleStarship.properties.manufacturer}</p>
            </div>
          )}
        </div>
      </div>

      {/* Nueva fila para Vehículos y Especies */}
      <div className="row mt-4">
        {/* Lista de Vehicles */}
        <div className="col-md-3">
          <h2>Lista de Vehicles</h2>
          <ul className="list-group">
            {store.vehicles.length > 0 ? (
              store.vehicles.map((vehicle, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedVehicleId(vehicle.uid)} // Asigna el ID seleccionado
                >
                  {vehicle.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando vehículos...</li>
            )}
          </ul>

          {/* Detalles del Vehículo seleccionado */}
          {store.singleVehicle && (
            <div>
              <h4>Detalles del Vehículo</h4>
              <p>Nombre: {store.singleVehicle.properties.name}</p>
              <p>Modelo: {store.singleVehicle.properties.model}</p>
              <p>Fabricante: {store.singleVehicle.properties.manufacturer}</p>
            </div>
          )}
        </div>

        {/* Lista de Species */}
        <div className="col-md-3">
          <h2>Lista de Species</h2>
          <ul className="list-group">
            {store.species.length > 0 ? (
              store.species.map((specie, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setSelectedSpeciesId(specie.uid)} // Asigna el ID seleccionado
                >
                  {specie.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">Cargando especies...</li>
            )}
          </ul>

          {/* Detalles de la Especie seleccionada */}
          {store.singleSpecies && (
            <div>
              <h4>Detalles de la Especie</h4>
              <p>Nombre: {store.singleSpecies.properties.name}</p>
              <p>Clasificación: {store.singleSpecies.properties.classification}</p>
              <p>Color de piel: {store.singleSpecies.properties.skin_color}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
