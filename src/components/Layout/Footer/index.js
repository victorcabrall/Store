import React from "react";
import {
  FooterArea,
  Row,
  Column,
  Title,
  List,
  Element,
  Subtitle,
} from "./style";

const Footer = () => {
  return (
    <FooterArea>
      <Column>
        <Title>Lorem ipsum</Title>
        <List>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
        </List>
      </Column>
      <Column>
        <Title>Lorem ipsum</Title>
        <List>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
           
        </List>
      </Column>
      <Column>
        <Title>Lorem ipsum</Title>
        <List>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
        </List>
      </Column>
      <Column>
        <Title>Lorem ipsum</Title>
        <List>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
            <Element><a href="">Lorem ipsum</a></Element>
        </List>
      </Column>
      <Column>
        <Title>Lorem ipsum</Title>
        <List>
        <Element><a href="">Lorem ipsum</a></Element>
        <Element><a href="">Lorem ipsum</a></Element>
        <Element><a href="">Lorem ipsum</a></Element>
        <Element><a href="">Lorem ipsum</a></Element>
        <Element><a href="">Lorem ipsum</a></Element>
        </List>
      </Column>
      <Column>
      <Title>Suporte</Title>
        <List>
          <Element>Segunda a sexta: 08:00 as 20:00</Element>
          <Element>
            <Subtitle>Endereço:</Subtitle>
            R. São Francisco Xavier - Granjas Rurais Pres. Vargas, Salvador -
            BA, 41290-550
          </Element>
          <Element>
            <Subtitle>Telefone:</Subtitle>
            (71) 9888-8888
          </Element>
          <Element>
            <Subtitle>E-mail:</Subtitle>
            email@email.com
          </Element>
        </List>
      </Column>
    </FooterArea>
  );
};

export default Footer;
