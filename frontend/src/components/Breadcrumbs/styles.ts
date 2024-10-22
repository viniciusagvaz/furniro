import styled from "styled-components";

export const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100px;
  background-color: ${({ theme }) => theme["yellow-200"]};

  padding: 0 5rem;

  span#Pipe {
    height: 37px;
    border: 1px solid ${({ theme }) => theme["gray-300"]};
    opacity: 0.4;
  }
`;

export const BreadCrumbsLink = styled.a`
  color: ${({ theme }) => theme["golden-brown"]};
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const Product = styled.p`
  color: #000;
`;
