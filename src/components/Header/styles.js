import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background-color: var(--gray);
  /* background-color: red; */
  width: 100%;
  height: 15%;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.8); 
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.8);
`

export const StyledImg = styled.img`
  width: 15%;

  @media (min-width: 768px) {
    width: 10%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      padding: 10px;
      border: 1px solid var(--black);
      border-radius: 5px 0 0 5px;
      outline: none;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 100%;
      border: 1px solid var(--black);
      border-radius: 0 5px 5px 0;
      background-color: yellow;
    }
  }

  button {
    border: 1px solid var(--black);
    border-radius: 5px;
    cursor: pointer;
  }
  
`