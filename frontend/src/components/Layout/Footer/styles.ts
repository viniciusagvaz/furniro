import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 0;
  border-top: 1px solid ${({ theme }) => theme["gray-200"]};
`;

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 0.25fr;
  grid-column-gap: 0px;

  max-width: 1240px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme["gray-200"]};
`;

export const Address = styled.address`
line-height: 1.5;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
`;

export const FooterBottom = styled.div`
  max-width: 1240.01px;
  width: 100%;
  padding: 3rem 0;
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
`;
