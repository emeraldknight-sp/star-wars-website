import {
  useEffect
} from "react";
import {
  createContext,
  useState
} from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const PlanetsContext = createContext([]);

export const PlanetsProvider = ({
    children
  }) => {
    const [planets, setPlanets] = useState([]);
    const [newListPlanets, setNewListPlanets] = useState([]);

    const getPlanets = () => {
      axios.get("https://swapi-trybe.herokuapp.com/api/planets/")
        .then(res => {
          setPlanets(res.data.results)
        })
        .catch((err) => toast.error("Erro: Não foi possível realizar busca!"))
    }

    useEffect(() => {
      getPlanets()
    }, [])

    const filterByName = (e) => {
      e.preventDefault();
      const filtered = planets.filter((planet) => 
      planet.name.toLowerCase().includes(e.target.value.toLowerCase()));
      filtered.length === 0 
      ? toast.error("Busca incompleta!") 
      : setNewListPlanets(filtered) 
      && toast.success("Busca realizada!") 
    }

    return ( 
    <PlanetsContext.Provider value = {{ planets, setPlanets, newListPlanets, setNewListPlanets, filterByName }}> 
      {children}
    </PlanetsContext.Provider>
    )
  }