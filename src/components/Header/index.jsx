import Container from "../Container";
import { StyledHeader, StyledImg, StyledMenu } from "./styles";
import Logo from "../../assets/img/Guerra nas Estrelas-48-96-144px/icons8-guerra-nas-estrelas-144.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from 'react';
import { PlanetsContext } from "../../providers/PlanetsList";


const Header = () => {

  const { filterByName } = useContext(PlanetsContext)
  
  return (
    <StyledHeader>
      <Container center={true}>
        <StyledImg src={Logo} alt="logo" />
        <StyledMenu>
          <form>
            <input
              type="text"
              placeholder="Digite sua busca"
              onChange={filterByName}
            />
          </form>
          <button>
            <AiOutlineMenu size={20} />
          </button>
        </StyledMenu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
