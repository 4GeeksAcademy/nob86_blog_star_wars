// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );

import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"; // Importa el contexto para acceder al store y las acciones

export const Home = () => {
	// Acceder al store y actions desde el contexto
	const { store, actions } = useContext(Context);

	// Llamar a la función que obtiene los planetas cuando el componente se monta
	useEffect(() => {
		actions.fetchPlanetsData(); // Llama al fetch de planetas
	}, []);

	return (
		<div className="text-center mt-5">
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
		</div>
	);
};
