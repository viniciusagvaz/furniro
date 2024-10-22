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

export const OtherImages = styled.div`
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
    border-radius: 10px;
  }
`;

export const Image = styled.div`
  grid-area: image;

  max-width: 481px;
  height: 500px;

  img {
    max-width: 481px;
    width: 100%;
    height: 500px;
    border-radius: 10px;

    object-fit: cover;
  }
`;

export const Details = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  grid-area: details;
`;

export const Name = styled.dt`
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 63px;
`;

export const Price = styled.dd`
  color: ${({ theme }) => theme["gray-300"]};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 36px;
`;

export const Rating = styled.dd`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  color: ${({ theme }) => theme["gray-300"]};
  font-size: .75rem;

  span.pipe {
    height: 30px;
    border: 1px solid ${({ theme }) => theme["gray-300"]};
    opacity: 0.4;
  }

  span.stars {
    display: flex;
    gap: 0.25rem;
  }
`;

export const Description = styled.dd`
  max-width: 424px;
  width: 100%;

  font-size: .5rem;
  line-height: 19.5px;
`;

export const SizesLabel = styled.label`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const Sizes = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const ColorsLabel = styled.label`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const Colors = styled.form`
  display: flex;
  gap: 1.5rem;
`;

export const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;

  background-color: ${({ color }) => color};
`;

export const CartOptions = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ExtraDetails = styled.dd`
  border-top: 1px solid ${({ theme }) => theme["gray-200"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme["gray-300"]};
  line-height: 24px;

  grid-area: extra_details;
`;

export const ExtraDetail = styled.span`
  display: grid;
  grid-template-columns: 0.25fr 0.01fr 1fr;
  align-items: start;

  gap: 0.5rem;
`;

export const Detail = styled.dt``;

export const DetailValue = styled.dd``;
