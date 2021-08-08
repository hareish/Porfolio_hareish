import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
      <Section>
        <LeftSection> 
          <SectionTitle main center > 
           Bienvenue à <br/> 
           à Mon portfolio
          </SectionTitle>
          <SectionText> 
            Je vous laisse découvir l'ensemble de mes projets
          </SectionText>
          <Button onClick={() => window.location = 'http://google.com'}> connaitre plus </Button>
        </LeftSection>
      </Section>
);

export default Hero;