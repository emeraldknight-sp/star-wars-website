import styled from "styled-components";

export const StyledFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  margin: 20px 0;


  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`