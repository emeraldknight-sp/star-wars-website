import { StyledCard } from "./styles";

const PlanetsCard = ({ planet }) => {
  const {
    name,
    climate,
    diameter,
    orbital_period,
    population,
    rotation_period,
    surface_water,
    terrain,
  } = planet;

  return (
    <StyledCard>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Climate: <span>{climate}</span>
      </p>
      <p>
        Diameter: <span>{Number(diameter).toLocaleString("pt-BR")} Km</span>
      </p>
      <p>
        Orbital period: <span>{orbital_period} days</span>
      </p>
      <p>
        Population:{" "}
        <span>
          {population === "unknown"
            ? "Unknown"
            : Number(population).toExponential(3)}
        </span>{" "}
      </p>
      <p>
        Rotation period: <span>{rotation_period} hours</span>
      </p>
      <p>
        Surface water: <span>{surface_water}%</span>
      </p>
      <p>
        Terrain: <span>{terrain}</span>
      </p>
    </StyledCard>
  );
};

export default PlanetsCard;
