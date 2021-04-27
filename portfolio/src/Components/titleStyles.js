import styled from "styled-components";

const TitleStyles = styled.h2`
  display: flex;
  align-items: flex-start;
  color: ${(p) => (p.black ? "" : "#fff")};
  padding: 0 1rem;
  margin-bottom: 2rem;
  text-align: center;
  cursor: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }
`;

export default TitleStyles;
