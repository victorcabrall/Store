import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
`;

export const Section = styled.section`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    font-size: 2rem;
  }
  margin-top: 48px;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const InputBox = styled.div`
  width: 100%;
  margin-top: 24px;
  & p {
    text-align: right;
    margin-top: 4px;
    color: #b1b1b1;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0px 12px;
  border-radius: 6px;
  border: 1px solid #e4e4e4;
  outline: none;
  margin-top: 6px;
`;
export const ButtonLogin = styled.input`
  width: 100%;
  font-size: 1rem;
  margin-top: 24px;
  background-color: #ffa500;
  border-radius: 6px;
  height: 50px;
  border: none;
  cursor: pointer;

  &:hover{
      background-color: #F19C00;
  }
  
`;
export const ButtonRegister = styled(ButtonLogin)`
    background-color: #F1F1F1;
    border: 1px solid #e4e4e4;
    margin-top:12px;
    &:hover{
        background-color: #ECECEC;
    }


`
export const Warning = styled.div`
  background-color:#FF0000;
  padding: 4px 12px;
  border-radius: 6px;
  display:flex;
  align-items: center;
  color: #fff;
  margin-top:24px;
`
