import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"; // Importa el contexto para acceder al store y las acciones
import Card from "../component/card";

export const Home = () => {
  // Acceder al store y actions desde el contexto
  const { store, actions } = useContext(Context);

  // Estados para almacenar el ID seleccionado para cada categoría
  const [selectedPlanetId, setSelectedPlanetId] = useState(null);
  const [selectedPeopleId, setSelectedPeopleId] = useState(null);
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);
  
  const [selectedVehicleId, setSelectedVehicleId] = useState(null); 
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(null); 

  // Llamar a la función que obtiene los datos cuando el componente se monta
  useEffect(() => {
    actions.fetchPlanetsData();
    actions.fetchPeopleData();
    actions.fetchStarshipsData();
    
    actions.fetchVehiclesData(); // Llama a la función de vehículos
    actions.fetchspeciesData(); // Llama a la función de especies
  }, []);

  // Fetch del ítem individual cuando se selecciona un ID
  useEffect(() => {
    if (selectedPlanetId) actions.fetchSinglePlanet(selectedPlanetId);
    if (selectedPeopleId) actions.fetchSinglePeople(selectedPeopleId);
    if (selectedStarshipId) actions.fetchSingleStarship(selectedStarshipId);
    
    if (selectedVehicleId) actions.fetchSingleVehicle(selectedVehicleId); // Agrega esta línea
    if (selectedSpeciesId) actions.fetchSingleSpecie(selectedSpeciesId); // Agrega esta línea
  }, [selectedPlanetId, selectedPeopleId, selectedStarshipId, selectedVehicleId, selectedSpeciesId]);

  return (
    <div className="container text-center mt-5">
      {/* Row para la lista de Planetas */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Lista de Planetas</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.planets.length > 0 ? (
              store.planets.map((planet, index) => (
                <Card
                  key={index}
                  name={planet.name}
                  type={"planets"}
                  id={planet.uid}
                  className="card"
                  onClick={() => setSelectedPlanetId(planet.uid)} // Asigna el ID seleccionado
                />
              ))
            ) : (
              <p className="text-white">Cargando planetas...</p>
            )}
          </div>
          {store.singlePlanet && (
            <div>
              <h4>Detalles del Planeta</h4>
              <p>Nombre: {store.singlePlanet.properties.name}</p>
              <p>Clima: {store.singlePlanet.properties.climate}</p>
              <p>Población: {store.singlePlanet.properties.population}</p>
            </div>
          )}
        </div>
      </div>

      {/* Row para la lista de People */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Lista de People</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.people.length > 0 ? (
              store.people.map((people, index) => (
                <Card
                  key={index}
                  name={people.name}
                  type={"characters"}
                  id={people.uid}
                  className="card"
                  onClick={() => setSelectedPeopleId(people.uid)} // Asigna el ID seleccionado
                />
              ))
            ) : (
              <p className="text-white">Cargando people...</p>
            )}
          </div>
          {store.singlePeople && (
            <div>
              <h4>Detalles de la Persona</h4>
              <p>Nombre: {store.singlePeople.properties.name}</p>
              <p>Género: {store.singlePeople.properties.gender}</p>
              <p>Altura: {store.singlePeople.properties.height}</p>
            </div>
          )}
        </div>
      </div>

      {/* Row para la lista de Starships */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Lista de Starships</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.starships.length > 0 ? (
              store.starships.map((starship, index) => (
                <Card
                  key={index}
                  name={starship.name}
                  type={"starships"}
                  id={starship.uid}
                  className="card"
                  onClick={() => setSelectedStarshipId(starship.uid)} // Asigna el ID seleccionado
                />
              ))
            ) : (
              <p className="text-white">Cargando starships...</p>
            )}
          </div>
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

      {/* Row para la lista de Vehicles */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Lista de Vehicles</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.vehicles.length > 0 ? (
              store.vehicles.map((vehicle, index) => (
                <Card
                  key={index}
                  name={vehicle.name}
                  type={"vehicles"}
                  id={vehicle.uid}
                  className="card"
                  onClick={() => setSelectedVehicleId(vehicle.uid)} // Asigna el ID seleccionado
                />
              ))
            ) : (
              <p className="text-white">Cargando vehículos...</p>
            )}
          </div>
          {store.singleVehicle && (
            <div>
              <h4>Detalles del Vehículo</h4>
              <p>Nombre: {store.singleVehicle.properties.name}</p>
              <p>Modelo: {store.singleVehicle.properties.model}</p>
              <p>Fabricante: {store.singleVehicle.properties.manufacturer}</p>
            </div>
          )}
        </div>
      </div>

      {/* Row para la lista de Species */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Lista de Species</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {store.species.length > 0 ? (
              store.species.map((specie, index) => (
                <Card
                  key={index}
                  name={specie.name}
                  type={"species"}
                  id={specie.uid}
                  className="card"
                  onClick={() => setSelectedSpeciesId(specie.uid)} // Asigna el ID seleccionado
                />
              ))
            ) : (
              <p className="text-white">Cargando especies...</p>
            )}
          </div>
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
