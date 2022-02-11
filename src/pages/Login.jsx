import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://ae01.alicdn.com/kf/HTB1MUiGLVXXXXcVXXXXq6xXFXXXD/Halloween-Women-Blue-Cinderella-Dress-Princess-Dress-for-Women-White-Snow-Cosplay-Costume-Party-Dress-Performance.jpg") center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`;

const Wrapper = styled.div `
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Form = styled.form `
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Agreement = styled.span `
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button `
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a `
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGİN</Button>
                <Link>Lorem ipsum dolor sit amet consectetur.</Link>
                <Link>Lorem ipsum dolor sit.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
};

export default Login;
