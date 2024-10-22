import styled from "styled-components";

export const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100px;
  background-color: ${({ theme }) => theme["yellow-200"]};

  padding: 0 5rem;

  p {
    color: ${({ theme }) => theme["gray-300"]};
  }

  span#Pipe {
    height: 2rem;
    border: 1px solid #000;
    opacity: 0.4;
  }
`;

