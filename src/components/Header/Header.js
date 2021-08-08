import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {  DiTravis } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href="/"> 
      <a style={ { display: "flex", alignment: "center", color:'#000052', marginBottom: '20;'}}> 
       <DiTravis size="3rem"/> <Span> Portfolio </Span>
      </a>
     </Link>
   </Div1>
   <Div2> 
     <li> 
       <Link href="#projects"> 
        <NavLink>Projects </NavLink>
       </Link>
     </li>
     <li> 
       <Link href="#tech"> 
        <NavLink> Technologies </NavLink>
       </Link>
     </li>
     <li> 
       <Link href="#about"> 
        <NavLink>à Propos de moi  </NavLink>
       </Link>
     </li>
   </Div2>

   <Div3>
    <SocialIcons href="https://github.com/hareish">
      <AiFillGithub siz="3rem"/> 
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/hareish-jeyakumar-0a681672/">
      <AiFillLinkedin siz="3rem"/> 
    </SocialIcons>
    <SocialIcons href="https://www.facebook.com/hareish.jeyakumar.9/">
      <AiFillFacebook siz="3rem"/> 
    </SocialIcons>
   </Div3>
 </Container> 
);

export default Header;
