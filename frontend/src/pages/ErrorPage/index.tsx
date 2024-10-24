import styled from "styled-components";

import support from "../../assets/icons/support.svg";
import logo from "../../assets/logos/logo.svg";

export const ErrorPage: React.FC = () => {
  return (
    <StyledWrapper>
      <img src={logo} alt="#" />
      <h2>Something went wrong!</h2>
      <p>Try again later or contact support</p>
      <img src={support} alt="#" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme["yellow-100"]};
`;
