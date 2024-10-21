import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const MenuItem = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({color }) => color};
  font-size: 1rem;
  font-weight: 500;
  
  
  transition: opacity 0.3s ease, transform 0.6s ease;
  
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }

  &:visited {
    color: #000;
  }
`;

export const Icon = styled.span`
  width: 22.17px;
  height: 22.17px;
  color: ${({ color }) => color};
  transition: all 0.6s ease;
`;
