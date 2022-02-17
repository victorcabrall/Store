import styled from "styled-components"

export const CardItemArea = styled.div`
    width: 226px;
    height: auto;
    background-color: #fff;
    margin: 2px;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.32);
    display: flex;
    flex-direction: column;
    position: relative;

`

export const CardImg = styled.img`
    width:auto;
    height:176px;
    object-fit: contain;
    
`
export const CardInfo = styled.div`
    padding: 0px 18px;
    

`

export const ItemName = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: 	#4F4F4F;
    margin-top:10px;
`
export const PriceItem = styled.p`
    margin-top:20px;
    text-decoration: line-through;
    font-size:14px;
    color: 	#A9A9A9;
    
`
export const NewPriceItem = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-top: 0px;
`
export const PromotionItem = styled.div`
    display: flex;
`
export const AssessmentItem = styled.div`
    display: flex;
    margin-top:6px;
    
    & p {
        margin-left: 2px;
        font-size: 14px;
        color: 	#A9A9A9;
    }
`
export const AddCart = styled.button`
  width: 100%;
  position: relative;
  margin-top:20px;
  padding: 10px;
  font-size:14px;
  background-color:#FFA500;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-weight: 700;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  
`

export const CardDepartamentArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 184px;
    height:184px;
    background-color: #fff;
    margin: 2px;
    padding: 18px;
    justify-content: center;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.32);
    border-radius:6px;
    & img{
        width:90px;
        object-fit: contain;
        margin:  0 auto;
    }
    & p{
        margin-top: 10px;
        word-wrap: break-word;
        text-align: center;
        font-size: 14px;
        
    }
    
`
