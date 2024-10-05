// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			],
// 			favoritos : [],
// 			planets : [],
// 			singlePlanet : null,
// 			people : [],

// 		},
// 		actions: {
// 			//fetchPlanetData: 
// 			//funcion que hara fethc get de planetas y luego se ta hara la variable planets con la informacion del fetch 
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritos: [],
			planets: [],  // Aquí se almacenarán los planetas
			singlePlanet: null,  // Para almacenar un solo planeta si es necesario
			people: [],
			singlePeople : null
		},
		actions: {
			// Función para hacer fetch de los planetas
			fetchPlanetsData: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => {
						if (!response.ok) throw new Error("Error al obtener los planetas");
						return response.json();
					})
					.then(data => {
						// Aquí almacenamos la lista de planetas en el store
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.error("Error fetching planets: ", error);
					});
			},

			// Función para obtener un solo planeta por ID
			fetchSinglePlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => {
						if (!response.ok) throw new Error("Error al obtener el planeta");
						return response.json();
					})
					.then(data => {
						// Aquí almacenamos el planeta individual en el store
						setStore({ singlePlanet: data.result });
					})
					.catch(error => {
						console.error("Error fetching single planet: ", error);
					});
			},

			fetchPeopleData: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => {
						if (!response.ok) throw new Error("Error al obtener los planetas");
						return response.json();
					})
					.then(data => {
						// Aquí almacenamos la lista de planetas en el store
						setStore({ people: data.results });
					})
					.catch(error => {
						console.error("Error fetching planets: ", error);
					});
			},

			// Función para obtener un solo planeta por ID
			fetchSinglePeople: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => {
						if (!response.ok) throw new Error("Error al obtener el planeta");
						return response.json();
					})
					.then(data => {
						// Aquí almacenamos el planeta individual en el store
						setStore({ singlePeople: data.result });
					})
					.catch(error => {
						console.error("Error fetching single planet: ", error);
					});
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				// Puedes hacer otros fetch aquí si es necesario
			},

			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
