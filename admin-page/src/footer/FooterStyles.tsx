import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooterContainer = styled(Container)`
  background: #757575;
  padding: 2em;
  height: auto;
  width: 100%;
`;

export const Contacts = styled(Container)`
  font-weight: 500;
  color: #1e1e1e;
`;
export const HighlitedColon = styled.span`
  color: #f24822;
`;

export const TitlesOfContactInfo = styled.p`
  color: #e6e6e6;
  font-size: 0.9em;
  font-weight: 600;
  display: inline;
`;

export const ContactsInfo = styled(ListGroup)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 5em;
  & > :nth-child(4) {
    grid-column: span 3;
  }

  justify-content: start;
  align-items: center;

  @media (min-width: 0px) and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7em;
  }
`;
export const SocialLinks = styled(ListGroup)`
  display: inline-block;
`;

export const Links = styled(ListGroup.Item)`
  display: inline;
  padding: 3em;
`;

export const Numbers = styled(ListGroup.Item)`
  display: inline;
`;
export const Number = styled(ListGroup.Item)`
  display: flex;
`;

export const CopyrightSection = styled(Container)`
  text-align: center;
  color: #e6e6e6;
  font-size: 1.1em;
`;
