import styled from "styled-components";
import hero from "../../assets/img/hero-shop.jpeg";

const image = hero;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  `;
  
  export const HeroBg = styled.img`
  height: 316px;
  background-image: url(${image});
  background-size: cover;
  background-position-y: 51%;
  background-repeat: no-repeat;
  width: 100%;
  filter: blur(2px) opacity(0.55);
  
  z-index: -1;
  `;
  
  export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  

  h2 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

