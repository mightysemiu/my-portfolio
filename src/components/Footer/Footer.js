import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234-802-929-2906">+234-802-929-2906</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mightysemiu@gmail.com">mightysemiu@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://mightysemiu.github.com'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/mightysemiu'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/mightysemiu'>
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
