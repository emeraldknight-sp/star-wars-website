import styled from "styled-components";

export const StyledContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.center === true ? "center" : "space-between"};
  align-items: ${(props) => props.center === true ? "center" : "flex-start"};
  /* background-color: yellow; */

  position: ${((props) => props.main ? "fixed" : "" )};
  top: ${((props) => props.main ? "15vh" : "" )};

  width: 90%;
  height: 100%;
  min-height: 10vh;

  h1 {
    font-size: var(--heading-1);
  }

  h2 {
    font-size: var(--heading-2);
  }

  h3 {
    font-size: var(--heading-3);
    margin: 0 auto;
  }

  a {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: var(--blue);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: ${(props) => props.center === false ? "center" : "space-between"};
  }
`