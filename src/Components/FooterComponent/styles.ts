import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--light-blue);
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 5rem;
`;

export const ContactsContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`;
export const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContactsTitleContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
  gap: 0.5rem;
`;
export const ContactsTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
`;
export const ContactsDescription = styled.span`
  max-width: 250px;
  width: 100%;
  font-size: 12px;
`;
export const Links = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
`;
export const LinksTitle = styled.span`
  font-size: 18px;
`;
export const LinksItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 14px;
`;
export const Footer = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--white);
`;
export const FooterCredits = styled.span`
  font-size: 14px;
`;
export const FooterCreditCards = styled.div`
  display: flex;
  gap: 1rem;
`;
