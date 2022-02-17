import React from "react";

import {
  Container,
  Banner,
  Content,
  Section,
  SectionHeader,
  ListCard,
  ListCardArea,
  AllItems,
  SectionAds
} from "./style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CardBox, CardDepartaments } from "../CardBox";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import AdsenseBox from "../AdsenseBox";
const Home = () => {
  return (
    <Container>
      <Content>
        <Banner>...</Banner>
        <Section>
          <SectionHeader>
            <h2>OFERTAS</h2>
          </SectionHeader>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              left: "35px",
              top: "50%",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "rotate(180deg)",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ListCard>
            <ListCardArea>
              <CardBox img="/mouse.jpg"></CardBox>
              <CardBox img="/alexa.jpg"></CardBox>
              <CardBox img="/mouse.jpg"></CardBox>
              <CardBox img="/alexa.jpg"></CardBox>
              <CardBox img="/mouse.jpg"></CardBox>
              <CardBox img="/mouse.jpg"></CardBox>
            </ListCardArea>
          </ListCard>
          <AllItems>
            <a href="#">VER TODOS</a>
          </AllItems>
        </Section>
        
        <Section>
          <SectionHeader>
            <h2>DEPARTAMENTOS</h2>
          </SectionHeader>
        <ArrowBackIosIcon
            sx={{
              position: "absolute",
              left: "35px",
              top: "50%",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "rotate(180deg)",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ListCard>
            <ListCardArea>
              <CardDepartaments setImg='./fogao.png' setTitle='Electrodomesticos'></CardDepartaments>
              <CardDepartaments setImg='./sofa.png' setTitle='Moveis'></CardDepartaments>
              <CardDepartaments setImg='./game.png' setTitle='Games'></CardDepartaments>
              <CardDepartaments setImg='./computador.png' setTitle='Informática'></CardDepartaments>
              <CardDepartaments setImg='./smartphone.png' setTitle='Celulares e Telefones'></CardDepartaments>
              <CardDepartaments setImg='./headphones.png' setTitle='Áudio'></CardDepartaments>
              <CardDepartaments></CardDepartaments>
            </ListCardArea>
          </ListCard>
        </Section>
        <SectionAds>
        <AdsenseBox></AdsenseBox>
        </SectionAds>
        
        <Section>
          <SectionHeader>
            <h2>EM ALTA</h2>
          </SectionHeader>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              left: "35px",
              top: "50%",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "rotate(180deg)",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ListCard>
            <ListCardArea>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./alexa.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./alexa.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
            </ListCardArea>
          </ListCard>
          <AllItems>
            <a href="#">VER TODOS</a>
          </AllItems>
        </Section>
        <Section>
          <SectionHeader>
            <h2>OFERTAS</h2>
          </SectionHeader>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              left: "35px",
              top: "50%",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ArrowBackIosIcon
            sx={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "rotate(180deg)",
              fontSize: 32,
            }}
          ></ArrowBackIosIcon>
          <ListCard>
            <ListCardArea>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./alexa.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./alexa.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
              <CardBox img="./mouse.jpg"></CardBox>
            </ListCardArea>
          </ListCard>
          <AllItems>
            <a href="#">VER TODOS</a>
          </AllItems>
        </Section>
      </Content>
    </Container>
  );
};

export default Home;
