import styled from "styled-components";

export const SectionFilter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  background-color: ${({ theme }) => theme["yellow-200"]};

  padding: 0 3rem;
  position: relative;
`;

export const FilterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: red;
    position: absolute;
    bottom: -45px;
    visibility: hidden;
  }

  span#Pipe {
    border-left: 1px solid black;
    height: 3rem;
  }
`;

export const FilterSorting = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  select {
    font-size: 1rem;
    padding: 1rem;
    border: none;
    color: ${({ theme }) => theme["gray-300"]};

    option {
      color: ${({ theme }) => theme["gray-300"]};
    }
  }
`;
