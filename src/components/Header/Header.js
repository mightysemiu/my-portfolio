import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>

        <DiCssdeck size="3rem" /> <span>Portfolio</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://mightysemiu.github.com'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/mightysemiu'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/mightysemiu'>
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
