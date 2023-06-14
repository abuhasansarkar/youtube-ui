import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingInContainer = styled.div`
  flex: 8;
  background-color: ${({ theme }) => theme.bgLighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  color: ${({ theme }) => theme.text};
  border: 0.5px solid ${({ theme }) => theme.soft};
  border-radius: 10px;
`;
const FormTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 28px;
`;
const Paragraph = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const SingInForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin-bottom: 10px;
  color: white;
`;
const Button = styled.button`
  padding: 10px 0;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const SingUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-top: 20px;
  font-size: 14px;
`;
const Language = styled.div``;
const Links = styled.div`
  display: flex;
  gap: 10px;
`;

const SingIn = () => {
  return (
    <SingInContainer>
      <Wrapper>
        <FormTitle>SingIn</FormTitle>
        <Paragraph>to Continue with ProTube</Paragraph>
        <SingInForm>
          <Input type="text" placeholder="UserName" />
          <Input type="password" placeholder="Password" />
          <Button>Sing IN</Button>
        </SingInForm>
        <Paragraph>Or</Paragraph>
        <SingUpForm>
          <Input type="text" placeholder="UserName" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sing UP</Button>
        </SingUpForm>
        <Footer>
          <Language>English(USA)</Language>
          <Links>
            <Link className="link">Help</Link>
            <Link className="link">Privacy</Link>
            <Link className="link">Terms</Link>
          </Links>
        </Footer>
      </Wrapper>
    </SingInContainer>
  );
};

export default SingIn;
