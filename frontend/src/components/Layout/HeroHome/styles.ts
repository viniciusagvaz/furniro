import styled from "styled-components";
import hero from "../../../assets/img/hero-home.jpeg";

const image = hero;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  `;
  
  export const HeroBg = styled.img`
  height: 500px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-y: bottom;
  width: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 

  position: absolute;
  bottom: 0.05rem;
  left: 51.25%;
  margin-right: 4rem;

  background-color: ${({ theme }) => theme["yellow-300"]};
  padding: 6rem 4rem 10rem;
  border:none
  
  `;
  
  export const HeroText = styled.p`
  max-width: 640px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding-bottom: .5rem;
`;

