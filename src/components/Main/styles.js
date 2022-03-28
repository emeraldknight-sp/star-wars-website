import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15vh;
  background-color: var(--gray);
  /* background-color: yellow; */
  width: 100%;
  height: 100%;

  > div {
    height: 70vh;
  }
`