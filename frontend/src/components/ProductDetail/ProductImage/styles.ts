import styled from "styled-components";

export const Image = styled.img`
  grid-area: image;

  max-width: 481px;
  width: 100%;
  height: 500px;

  background-color: ${({ theme }) => theme["yellow-200"]};
  border-radius: 10px;

  border-radius: 10px;

  object-fit: cover;
`;
