import styled from "styled-components";

export const Button = styled.button``;

export const DetailsButton = styled.button`
  max-width: 202px;
  width: 100%;
  
  background-color: #ffffff;
  border: 1px solid transparent;
  color: ${({ theme }) => theme["golden-brown"]};
  font-weight: 700;
  padding: .75rem 2rem;
  cursor: pointer;
  
  transition: all 0.6s ease;

  &:hover {
    background-color: ${({ theme }) => theme["golden-brown"]};
    color: ${({ theme }) => theme["yellow-100"]};
`;

export const ShowButton = styled(DetailsButton)`
  border: 1px solid ${({ theme }) => theme["golden-brown"]};
`;

export const NavigationButton = styled.button`
    border-radius: 10px;
    border: none;
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme["yellow-200"]};

    transition: background-color 0.6s ease, color 0.3s ease;

    &:hover{
        color: #ffffff;
        background-color: ${({ theme }) => theme["golden-brown"]};
    }
  }
`;

export const ActiveNavigationButton = styled(NavigationButton)`
  background-color: ${({ theme }) => theme["golden-brown"]};
  color: #ffffff;
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 1rem 3rem;
  font-size: 1.25rem;

  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const NewsLetterButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 1.5px solid #000;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
`;
