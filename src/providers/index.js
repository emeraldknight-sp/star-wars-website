import { PlanetsProvider } from "./PlanetsList"


const Providers = ({ children }) => {
  return (
    <PlanetsProvider>
      { children }
    </PlanetsProvider>
  )
}

export default Providers;