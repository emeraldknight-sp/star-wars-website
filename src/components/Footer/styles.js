import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15vh;
  background-color: var(--gray);
  /* background-color: green; */
  width: 100%;
  height: 10%;
  min-height: 80px;
`

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100px;
`