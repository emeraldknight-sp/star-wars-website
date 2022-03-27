import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

import { useContext } from "react";

import { PlanetsContext } from "../../providers/PlanetsList";
import PlanetsCard from "../../components/PlanetsCard";
import { StyledFrame } from "./styles";

const Homepage = () => {
  const { planets, newListPlanets } = useContext(PlanetsContext);

  return (
    <>
      <Header />
      <Main>
        <StyledFrame>
          {newListPlanets.length > 0
            ? newListPlanets.map((planet, index) => (
                <PlanetsCard key={index} planet={planet} />
              ))
            : planets.map((planet, index) => (
                <PlanetsCard key={index} planet={planet} />
              ))}
        </StyledFrame>
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
