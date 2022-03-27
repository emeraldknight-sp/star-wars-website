import styled from "styled-components"

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  max-width: 300px;
  height: 180px;
  padding: 10px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    font-size: var(--body);
    font-weight: 500;
  }

  span {
    font-size: var(--headline);
    text-align: right;
    font-weight: normal;
  }

  @media (min-width: 1000px) {
    max-width: 300px;
  }
`