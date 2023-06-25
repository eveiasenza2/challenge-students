import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export const CustomInput = styled.input`
border-radius: 7px;
margin: 6px;
width: 340px;
padding: 10px;
height: 30px;
font-size: 16px;
color:black;
`;

export const WrapLink = styled.div`
padding: 20px;
`;


export const CustomLink = styled(Link)`
text-decoration:none !important;
color:white !important;
`;

export const CustomButton = styled(Button)`
display: inline-block;
border-radius: 4px;
background-color: grey;
border: none;
color: #FFFFFF;
text-align: center;
font-size: 18px;
height:40px;
width: 200px;
transition: all 0.5s;
cursor: pointer;
margin: 40px;
:hover {
    background-color: #008CBA;
    color: white;
}
`;

export const CustomForm = styled.form`
text-align: center;
margin-top:40px;
margin-bottom: 40px;
`;

export const EditFormContainer = styled.div`
text-align: center;
margin-top:40px;
margin-bottom: 40px;
display:grid;
`;

export const Title = styled.h1`
padding: 30px;
`;

export const SubTitle = styled.h3`
padding: 30px;
text-decoration: underline;
`;

export const ButtonContain = styled.div`
display: flex;
justify-content: space-around;
`;