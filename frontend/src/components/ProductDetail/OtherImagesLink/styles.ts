import styled from "styled-components";

export const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  grid-area: other_image;

  max-width: 76px;
  height: 416px;
`;

export const Image = styled.img`
  max-width: 76px;
  width: 100%;
  height: 80px;

  object-fit: cover;
  border-radius: 10px;
`;
