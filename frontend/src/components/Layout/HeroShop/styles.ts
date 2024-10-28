import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroBg = styled.img`
  height: 316px;
  width: 100%;
  object-fit: cover;
  filter: brightness(100%) blur(4px);
  opacity: 0.75;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 1.25rem;
  text-transform: capitalize;
`;

export const Category = styled.p`
  text-transform: capitalize;
`;
