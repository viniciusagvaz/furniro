import styled from "styled-components";

export const ExtraDetails = styled.div`
  border-top: 1px solid ${({ theme }) => theme["gray-200"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme["gray-300"]};
  line-height: 24px;

  grid-area: extra_details;
`;

export const ExtraDetail = styled.span`
  display: grid;
  grid-template-columns: 0.25fr 0.01fr 1fr;
  align-items: start;

  gap: 0.5rem;
`;

export const Detail = styled.p``;

export const DetailValue = styled.p`
  text-transform: capitalize;
`;
