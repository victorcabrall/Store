import React from "react";
import {
  CardItemArea,
  CardImg,
  CardInfo,
  ItemName,
  AssessmentItem,
  PriceItem,
  PromotionItem,
  NewPriceItem,
  AddCart,
  CardDepartamentArea,
} from "./style";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export const CardBox = (props) => {
  return (
    <CardItemArea>
      <FavoriteBorderOutlinedIcon sx={{position: "absolute", right:0, marginRight:"8px", marginTop: "8px"}}></FavoriteBorderOutlinedIcon>
      <CardImg src={props.img}></CardImg>
      <CardInfo>
        <ItemName>
          Mouse Gamer Havit MS1001 RGB 7 Botões 4800 DPI Black
        </ItemName>
        <AssessmentItem>
          <StarIcon sx={{ color: "#FFD700", fontSize: 18 }}></StarIcon>
          <StarIcon sx={{ color: "#FFD700", fontSize: 18 }}></StarIcon>
          <StarIcon sx={{ color: "#FFD700", fontSize: 18 }}></StarIcon>
          <StarIcon sx={{ color: "#FFD700", fontSize: 18 }}></StarIcon>
          <StarIcon sx={{ color: "#ccc", fontSize: 18 }}></StarIcon>
          <p>(131)</p>
        </AssessmentItem>
        <PriceItem>R$ 349,99</PriceItem>
        <PromotionItem>
          <NewPriceItem>R$ 299,99</NewPriceItem>
        </PromotionItem>
      </CardInfo>
      <AddCart>Comprar</AddCart>
    </CardItemArea>
  );
};

export const CardDepartaments = (props) => {
  return (
    <CardDepartamentArea>
     <img src={props.setImg} alt="" />
      <p>{props.setTitle}</p>
    </CardDepartamentArea>
  );
};
