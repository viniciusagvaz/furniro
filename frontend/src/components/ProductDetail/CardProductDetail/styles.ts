import styled from "styled-components";

export const ProductGrid = styled.article`
  max-width: 1240px;
  width: 100%;
  margin: 2rem auto;
  border-bottom: 1px solid #000;
  height: 820px;

  .container {
    display: grid;
    grid-template-columns: 0.25fr 1fr 0.1fr 1.3fr;
    grid-template-rows: 1fr 0.5fr;
    gap: 32px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "other_image image . details"
      ". . . extra_details";
  }
`;