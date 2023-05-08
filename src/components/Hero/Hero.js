import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Semiu Olanrewaju's Portfolio
      </SectionTitle>
      <SectionText>
      An independent creative Full Stack Web Developer. <br />
      I'm not hard to find, let's build something amazing!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mightysemiu@gmail.com'}>
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;