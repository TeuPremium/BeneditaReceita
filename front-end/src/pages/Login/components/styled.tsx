import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyHome = styled.div`
  height: 100vh;
  background-color: #fa6f3a;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  user-select: none;
  text-align: left;
  
  @media (max-width: 900px) {
   display: none;
  }
  h1 {
    padding-left: 10%;
    padding-right: 10%;
    font-family: "Passion One", cursive;
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #ffffff;
    @media (max-width: 1100px) {
      font-family: Passion One;
      font-size: 76px;
      font-weight: 700;
      line-height: 84px;
      letter-spacing: 0.05em;
    }
  }
  h2 {
    padding-left: 10%;
    padding-right: 10%;
    width: 90%;
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    color: #ffffff;
    box-sizing: border-box;
    @media (max-width: 1300px) {
      width: 100%;
    }
    @media (max-width: 900px) {
      padding-right: 15%;
      font-family: Oswald;
      font-size: 23px;
      font-weight: 700;
      line-height: 34px;
    }
  }
`;

export const BodySignin = styled.div`
margin-top: 10%;
  background-color: #ff531c;
  position: relative;
  right: 10px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  border-radius: 35px;
  padding: 10px;
  span {
    margin-bottom: 5px;
  }
  @media (max-width: 900px) {
    width: 110%;
  }
  h2 {
    font-size: xx-large;
    margin-bottom: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    border-style: solid;
    border-width: 1px;
    height: 65px;
    width: 429px;
    margin-bottom: 13px;
    padding-left: 17px;
    box-sizing: border-box;
    border-radius: 60px;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    font-weight: 700;
    line-height: 40px;
    color: #000000;
    @media (max-width: 900px) {
      height: 55px;
      width: 100%;
      font-size: 22px;
    }
  }
  input::placeholder {
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  margin-left: 50px;
  margin-right: 50px;
  background-color: #1877f2;
  border: none;
  margin-bottom: 36px;
  height: 65px;
  width: 90%;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 26px;
  @media (max-width: 900px) {
    height: 55px;
    width: 90%;
    font-size: 22px;
  }
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 900px) {
    font-size: 17px;
  }
`;
