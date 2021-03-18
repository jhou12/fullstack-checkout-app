import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
font-family: 'Fira Sans', sans-serif;
font-size: 20px;
padding: 10%;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
line-height: 30px;
`;

export const Summary = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.div`
font-size: 35px;
font-weight: 700;
padding: 5px;
`;

export const TitleSmall = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
font-weight: 700;
padding: 20px;
`;

export const ErrorStyled = styled.div`
display: flex;
justify-content: center;
`;

export const ButtonStyled = styled.button`
width: 175px;
height: 45px;
background-color: orange;
font-family: 'Fira Sans';
font-weight: 700;
font-size: 18px;
letter-spacing: 1px;
color: white;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
margin-bottom: 10px;
border-radius: 25px;
border-style: none;
cursor: pointer;
`;