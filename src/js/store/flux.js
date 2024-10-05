const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favoritos: [],
      planets: [], // Aquí se almacenarán los planetas
      singlePlanet: null, // Para almacenar un solo planeta si es necesario
      people: [],
      singlePeople: null,
      starships: [],
      singleStarship: null,
      films: [],
      singleFilm: null,
    },
    actions: {
      // Función para hacer fetch de los planetas
      fetchPlanetsData: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los planetas");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos la lista de planetas en el store
            setStore({ planets: data.results });
          })
          .catch((error) => {
            console.error("Error fetching planets: ", error);
          });
      },

      // Función para obtener un solo planeta por ID
      fetchSinglePlanet: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el planeta");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos el planeta individual en el store
            setStore({ singlePlanet: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single planet: ", error);
          });
      },

      fetchPeopleData: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los people");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos la lista de planetas en el store
            setStore({ people: data.results });
          })
          .catch((error) => {
            console.error("Error fetching planets: ", error);
          });
      },

      // Función para obtener un solo planeta por ID
      fetchSinglePeople: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener people");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos el planeta individual en el store
            setStore({ singlePeople: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single people: ", error);
          });
      },

      fetchStarshipsData: () => {
        fetch("https://www.swapi.tech/api/starships")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los starthips");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos la lista de planetas en el store
            setStore({ starships: data.results });
          })
          .catch((error) => {
            console.error("Error fetching starships: ", error);
          });
      },

      // Función para obtener un solo planeta por ID
      fetchSingleStarship: (id) => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el starship");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos el planeta individual en el store
            setStore({ singleStarship: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single starship: ", error);
          });
      },

      fetchFilmsData: () => {
        fetch("https://www.swapi.tech/api/films")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los films");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos la lista de planetas en el store
            const films = data.result.map((film) => film.properties);
            setStore({ films: films });
          })
          .catch((error) => {
            console.error("Error fetching films: ", error);
          });
      },

      // Función para obtener un solo planeta por ID
      fetchSingleFilm: (id) => {
        fetch(`https://www.swapi.tech/api/films/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el film");
            return response.json();
          })
          .then((data) => {
            // Aquí almacenamos el planeta individual en el store
            setStore({ singleFilm: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single film: ", error);
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
      },
    },
  };
};

export default getState;
