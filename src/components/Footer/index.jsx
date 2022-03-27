import Container from "../Container";
import { StyledFooter, StyledLinks } from "./styles";
import { FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <Container center={true}>
        <h3>Designed by EmeraldKnight inc.</h3>
        <StyledLinks>
          <a
            href="https://www.twitch.tv/emeraldknightofc"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch /> Twitch
          </a>
          <a
            href="https://www.instagram.com/_emeraldesign/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/david-almeida-6069351ab/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> Linkedin
          </a>
        </StyledLinks>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
