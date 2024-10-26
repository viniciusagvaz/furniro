import styled from "styled-components";

export const SectionFilter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  background-color: ${({ theme }) => theme["yellow-200"]};

  padding: 0 5rem;
  position: relative;
`;

