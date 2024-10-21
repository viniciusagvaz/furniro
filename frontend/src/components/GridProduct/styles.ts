import styled from "styled-components";

export const ProductGrid = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 2rem auto;
  border-bottom: 1px solid #000;

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

  .other_image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    grid-area: other_image;

    max-width: 76px;
    height: 416px;

    img {
      max-width: 76px;
      width: 100%;
      height: 80px;

      object-fit: cover;

      border: 1px solid #000;
      border-radius: 10px;
    }
  }

  .image {
    grid-area: image;

    max-width: 481px;
    height: 500px;

    border: 1px solid #000;
    border-radius: 10px;

    img {
      max-width: 481px;
      width: 100%;
      height: 500px;

      object-fit: cover;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    grid-area: details;
  }

  .extra_details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: extra_details;
    height: 132px;
  }
`;