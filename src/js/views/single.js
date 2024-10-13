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
        <div className="jumbotron">
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
                            {/* Agrega más detalles según sea necesario */}
                        </>
                    )}
                    {/* Agrega más condiciones para starships, films, vehicles, species */}
                    <hr className="my-4" />
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" role="button">
                            Back home
                        </span>
                    </Link>
                </>
            ) : (
                <p>Loading...</p> // Mensaje mientras se cargan los detalles
            )}
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
