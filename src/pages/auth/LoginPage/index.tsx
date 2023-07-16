import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import Logo from "../../../components/Logo";
import LoginBG from "../../../assets/images/login-bg.png";

const LogoContainer = styled.div`
  ${tw`m-0 laptop:mt-5 laptop:ml-20`}
`;
const Container = styled.div`
  ${tw`flex items-center justify-center`}
`;
const Background = styled.img`
  ${tw`ml-[7%] hidden laptop:block`}
`;

const LoginPage = () => {
  const handleFormSubmit = (values: any) => {
    console.log("Form submit: ", values);
  };
  return (
    <>
      <LogoContainer>
        <Logo theme="dark" />
      </LogoContainer>
      <Container>
        <LoginForm onSubmit={handleFormSubmit} />
        <Background src={LoginBG} alt="Register background" />
      </Container>
    </>
  );
};

export default LoginPage;
