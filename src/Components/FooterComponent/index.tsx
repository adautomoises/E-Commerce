//import React, { useState, useEffect } from 'react';
import { ReactComponent as BlueLogo } from "../../Assets/blue_icon.svg";
import { ReactComponent as MasterCard } from "../../Assets/mastercard_icon.svg";
import { ReactComponent as Visa } from "../../Assets/visa_icon.svg";
import {
  Container,
  ContactsContainer,
  Contact,
  ContactsTitleContainer,
  ContactsTitle,
  ContactsDescription,
  Links,
  LinksContainer,
  LinksTitle,
  LinksItems,
  Link,
  Footer,
  FooterCredits,
  FooterCreditCards,
} from "./styles";

export function FooterComponent() {
  return (
    <Container>
      <ContactsContainer>
        <Contact>
          <ContactsTitleContainer>
            <BlueLogo width={40} />
            <ContactsTitle>E-Comm</ContactsTitle>
          </ContactsTitleContainer>
          <ContactsDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </ContactsDescription>
        </Contact>
        <Contact>
          <ContactsTitleContainer>
            <ContactsTitle>Follow Us</ContactsTitle>
          </ContactsTitleContainer>
          <ContactsDescription>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </ContactsDescription>
        </Contact>
        <Contact>
          <ContactsTitleContainer>
            <ContactsTitle>Contact Us</ContactsTitle>
          </ContactsTitleContainer>
          <ContactsDescription>
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </ContactsDescription>
        </Contact>
      </ContactsContainer>
      <Links>
        <LinksContainer>
          <LinksTitle>Infomation</LinksTitle>
          <LinksItems>
            <Link>About Us</Link>
            <Link>Infomation</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </LinksItems>
        </LinksContainer>
        <LinksContainer>
          <LinksTitle>Service</LinksTitle>
          <LinksItems>
            <Link>About Us</Link>
            <Link>Infomation</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </LinksItems>
        </LinksContainer>
        <LinksContainer>
          <LinksTitle>My Account</LinksTitle>
          <LinksItems>
            <Link>About Us</Link>
            <Link>Infomation</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </LinksItems>
        </LinksContainer>
        <LinksContainer>
          <LinksTitle>Our Offers</LinksTitle>
          <LinksItems>
            <Link>About Us</Link>
            <Link>Infomation</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </LinksItems>
        </LinksContainer>
      </Links>
      <Footer>
        <FooterCredits>
          © 2023 E-Commerce made by Adauto Moisés & Rafael Aires.
        </FooterCredits>
        <FooterCreditCards>
          <MasterCard />
          <Visa />
        </FooterCreditCards>
      </Footer>
    </Container>
  );
}
