import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
    const { store, actions } = useContext(Context);
    const params = useParams(); // Captura el parámetro de la URL (theid)

    useEffect(() => {
        const { type, id } = params; // Captura el tipo y el id
        if (type === "characters") {
            actions.fetchSinglePeople(id); // Llama a la acción para obtener los detalles de la persona
        } else if (type === "planets") {
            actions.fetchSinglePlanet(id); // Llama a la acción para obtener los detalles del planeta
        } else if (type === "starships") {
            actions.fetchSingleStarship(id); // Llama a la acción para obtener los detalles de la nave
        } else if (type === "films") {
            actions.fetchSingleFilm(id); // Llama a la acción para obtener los detalles del film
        } else if (type === "vehicles") {
            actions.fetchSingleVehicle(id); // Llama a la acción para obtener los detalles del vehículo
        } else if (type === "species") {
            actions.fetchSingleSpecie(id); // Llama a la acción para obtener los detalles de la especie
        }
    }, [params, actions]);

    // Dependiendo del tipo, selecciona los detalles correctos
    let itemDetails;
    if (params.type === "characters") {
        itemDetails = store.singlePeople;
    } else if (params.type === "planets") {
        itemDetails = store.singlePlanet;
    } else if (params.type === "starships") {
        itemDetails = store.singleStarship;
    } else if (params.type === "films") {
        itemDetails = store.singleFilm;
    } else if (params.type === "vehicles") {
        itemDetails = store.singleVehicle;
    } else if (params.type === "species") {
        itemDetails = store.singleSpecies;
    }

    return (
        <div className="jumbotron d-flex justify-content-center align-items-center flex-column text-center vh-100">
            {itemDetails ? (
                <>
                    <h1 className="display-4">{itemDetails.properties.name}</h1>
                    {/* Muestra las propiedades específicas según el tipo */}
                    {params.type === "characters" && (
                        <>
                            <p><strong>Height:</strong> {itemDetails.properties.height}</p>
                            <p><strong>Mass:</strong> {itemDetails.properties.mass}</p>
                            <p><strong>Hair Color:</strong> {itemDetails.properties.hair_color}</p>
                            <p><strong>Skin Color:</strong> {itemDetails.properties.skin_color}</p>
                            <p><strong>Eye Color:</strong> {itemDetails.properties.eye_color}</p>
                            <p><strong>Birth Year:</strong> {itemDetails.properties.birth_year}</p>
                            <p><strong>Gender:</strong> {itemDetails.properties.gender}</p>
                        </>
                    )}
                    {params.type === "planets" && (
                        <>
                            <p><strong>Climate:</strong> {itemDetails.properties.climate}</p>
                            <p><strong>Population:</strong> {itemDetails.properties.population}</p>
                            <p><strong>Created:</strong> {itemDetails.properties.created}</p>
                            <p><strong>Diameter:</strong> {itemDetails.properties.diameter}</p>
                            <p><strong>Edited:</strong> {itemDetails.properties.edited}</p>
                            <p><strong>Gravity:</strong> {itemDetails.properties.gravity}</p>
                            <p><strong>Orbital period:</strong> {itemDetails.properties.orbital_period}</p>
                            <p><strong>Rotation period:</strong> {itemDetails.properties.rotation_period}</p>
                            <p><strong>Surface water:</strong> {itemDetails.properties.surface_water}</p>
                            <p><strong>Terrain:</strong> {itemDetails.properties.terrain}</p>
                        </>
                    )}
                    {params.type === "starships" && (
                        <>
                            <p><strong>Model:</strong>{itemDetails.properties.model}</p>
                            <p><strong>Manufacturer:</strong>{itemDetails.properties.manufacturer}</p>
                            <p><strong>Cargo capacity:</strong>{itemDetails.properties.cargo_capacity}</p>
                            <p><strong>Cost:</strong>{itemDetails.properties.cost_in_credits}</p>
                            <p><strong>MGLT:</strong>{itemDetails.properties.MGLT}</p>
                            <p><strong>Consumables:</strong>{itemDetails.properties.consumables}</p>
                            <p><strong>Created:</strong>{itemDetails.properties.created}</p>
                            <p><strong>Crew:</strong>{itemDetails.properties.crew}</p>
                            <p><strong>Edited:</strong>{itemDetails.properties.edited}</p>
                            <p><strong>Hyperdrive rating:</strong>{itemDetails.properties.hyperdrive_rating}</p>
                            <p><strong>Length:</strong>{itemDetails.properties.length}</p>
                            <p><strong>Max atmosphering speed:</strong>{itemDetails.properties.max_atmosphering_speed}</p>
                            <p><strong>Passengers:</strong>{itemDetails.properties.passengers}</p>
                        </>
                    )}
                    {params.type === "vehicles" && (
                        <>
                            <p><strong>Cargo capacity:</strong> {itemDetails.properties.cargo_capacity}</p>
                            <p><strong>Consumables:</strong> {itemDetails.properties.consumables}</p>
                            <p><strong>Cost in credits:</strong> {itemDetails.properties.cost_in_credits}</p>
                            <p><strong>Created:</strong> {itemDetails.properties.created}</p>
                            <p><strong>Crew:</strong> {itemDetails.properties.crew}</p>
                            <p><strong>Edited:</strong> {itemDetails.properties.edited}</p>
                            <p><strong>Length:</strong> {itemDetails.properties.length}</p>
                            <p><strong>Max atmosphering speed:</strong> {itemDetails.properties.max_atmosphering_speed}</p>
                            <p><strong>Model:</strong> {itemDetails.properties.model}</p>
                            <p><strong>Passengers:</strong> {itemDetails.properties.passengers}</p>
                            <p><strong>Vehicle class:</strong> {itemDetails.properties.vehicle_class}</p>
                        </>
                    )}
                    <hr className="my-4" />
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" role="button">
                            Back home
                        </span>
                    </Link>
                </>
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
