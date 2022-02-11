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
    width: 27%;
    padding: 20px;
    background-color: white;
`;

const Form = styled.form `
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
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
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga, cumque veniam perferendis optio voluptas adipisci modi officia!</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
};

export default Register;
