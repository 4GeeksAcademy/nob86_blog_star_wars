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
      planets: [],
      singlePlanet: null,
      people: [],
      singlePeople: null,
      starships: [],
      singleStarship: null,
      films: [],
      singleFilm: null,
      vehicles: [],
      singleVehicle: null,
      species: [],
      singleSpecies: null,
    },
    actions: {
      fetchPlanetsData: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los planetas");
            return response.json();
          })
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => {
            console.error("Error fetching planets: ", error);
          });
      },

      fetchSinglePlanet: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el planeta");
            return response.json();
          })
          .then((data) => {
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
            setStore({ people: data.results });
          })
          .catch((error) => {
            console.error("Error fetching people: ", error);
          });
      },

      fetchSinglePeople: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener people");
            return response.json();
          })
          .then((data) => {
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
            setStore({ starships: data.results });
          })
          .catch((error) => {
            console.error("Error fetching starships: ", error);
          });
      },

      fetchSingleStarship: (id) => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el starship");
            return response.json();
          })
          .then((data) => {
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
            const films = data.result.map((film) => film.properties);
            setStore({ films: films });
          })
          .catch((error) => {
            console.error("Error fetching films: ", error);
          });
      },

      fetchSingleFilm: (id) => {
        fetch(`https://www.swapi.tech/api/films/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el film");
            return response.json();
          })
          .then((data) => {
            setStore({ singleFilm: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single film: ", error);
          });
      },

      fetchVehiclesData: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los vehicles");
            return response.json();
          })
          .then((data) => {
            setStore({ vehicles: data.results });
          })
          .catch((error) => {
            console.error("Error fetching vehicles: ", error);
          });
      },

      fetchSingleVehicle: (id) => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el vehicle");
            return response.json();
          })
          .then((data) => {
            setStore({ singleVehicle: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single vehicle: ", error);
          });
      },

      fetchspeciesData: () => {
        fetch("https://www.swapi.tech/api/species")
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener los species");
            return response.json();
          })
          .then((data) => {
            setStore({ species: data.results });
          })
          .catch((error) => {
            console.error("Error fetching species: ", error);
          });
      },

      fetchSingleSpecie: (id) => {
        fetch(`https://www.swapi.tech/api/species/${id}`)
          .then((response) => {
            if (!response.ok) throw new Error("Error al obtener el specie");
            return response.json();
          })
          .then((data) => {
            setStore({ singleSpecie: data.result });
          })
          .catch((error) => {
            console.error("Error fetching single specie: ", error);
          });
      },

      addFavorite: (item) => {
        const store = getStore();
        const exists = store.favoritos.some((fav) => fav.name === item.name);
        if (!exists) {
          const newFavorites = [...store.favoritos, item];
          setStore({ favoritos: newFavorites });
        }
      },

      removeFavorite: (name) => {
        const store = getStore();
        const newFavorites = store.favoritos.filter((fav) => fav.name !== name);
        setStore({ favoritos: newFavorites });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {},

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
