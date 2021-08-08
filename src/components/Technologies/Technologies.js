import React from 'react';
import { DiFirebase, DiReact, DiRuby, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
    J'ai travaillé avec un large éventail de technologies dans le monde du développement web.
    Du back-end au design.
    </SectionText>
    <List>
      <ListItem> 
        <DiRuby size="3rem" /> 
        <ListContainer>
          <ListTitle> Back-End</ListTitle>
          <ListParagraph> 
            Expérience avec: <br/> 
            Ruby on rails
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiReact size="3rem" /> 
        <ListContainer>
          <ListTitle> Front-End</ListTitle>
          <ListParagraph> 
            Expérience avec <br/> 
            React.JS
            Html
            Css
            Sass
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiZend size="3rem" /> 
        <ListContainer>
          <ListTitle> UI/UX</ListTitle>
          <ListParagraph> 
            Expérience avec <br/> 
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
