import styled from "styled-components";

export const Main = styled.div`
  min-height: calc(100vh - 214px);
  padding-bottom:64px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  margin-top: 48px;
  align-items: center;
  & h1{
    font-size:2rem;
    margin-bottom: 24px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  &:nth-child(9){
    flex-direction: row;
    align-items: center;
   
  }
  &:first-child{
    margin-top:0px;
  }
  & input[name="date"] ,input[name="phone"] {
    width: 180px;
  }
 & input[type="checkbox"]{
  width: 20px;
    height: 20px;
    margin-top:0px;
    margin-right:4px ;
 }
 
`;

export const Form = styled.div`
  width: 100%;
`;
export const GenderBox = styled.div`
margin-top:24px;
  & span{
    display: flex;
    margin-top: 6px;
    align-items: center;
  }
  & label {
    flex-direction: row;
    margin: 0;
    align-items: center;
    
  }
  & label:first-child {
    margin-right:12px;
  }
  & input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-top: 0px ;
    margin-left: 4px;
  }
`;
export const Input = styled.input`
  width: 400px;
  width: 100%;
  height: 50px;
  padding: 0px 12px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #E4E4E4;
  margin-top:6px ;
  font-size:1rem;
  
 
`;

export const Button = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 24px;
  border-radius:6px;
  background-color: #ffa500;
  border: none;
  font-size:1rem;
  cursor: pointer;
`;

export const Warning = styled.div`
  background-color:#FF0000;
  padding: 4px 12px;
  border-radius: 6px;
  display:flex;
  align-items: center;
  color: #fff;
  margin-bottom: 24px;
`
