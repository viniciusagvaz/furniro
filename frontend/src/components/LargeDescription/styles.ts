import styled from "styled-components";

export const LargeDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  max-width: 1026px;
  width: 100%;

  margin: 0 auto;

  text-align: justify;
`;

export const Buttons = styled.span`
  display: flex;
  gap: 3rem;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme["gray-300"]};
`;
