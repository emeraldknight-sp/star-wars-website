import { StyledContainer } from "./styles";


const Container = ({ children, center = false, main = "" }) => {
  return (
    <StyledContainer center={center} main={main}>
      { children }
    </StyledContainer>
  )
}

export default Container;