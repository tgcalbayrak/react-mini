import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div ``;
const Wrapper = styled.div `
    padding: 20px;
`;
const Title = styled.h1 `
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const Info = styled.div `
    flex: 3;
`;

const Summary = styled.div `
    flex: 1;
`;

const TopTexts = styled.div ``;

const Product = styled.div `
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div `
    flex: 2;
    display: flex;
`;

const ProductColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductId = styled.span ``;

const ProductName = styled.span ``;

const ProductSize = styled.span ``;

const Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Image = styled.img `
    width: 200px;
`;

const PriceDetail = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TopText = styled.span `
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`;

const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
`;

const ProductAmount = styled.div `
    display: flex;
    justify-content: space-between;
`;

const ProductAmountContainer = styled.div `
    display: flex;
    justify-content: space-between;
`;

const Cart = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag (2)</TopText>
                      <TopText>Your Whishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type="filled">CHECK NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                          <ProductDetail>
                              <Image src="https://ae01.alicdn.com/kf/HTB1MUiGLVXXXXcVXXXXq6xXFXXXD/Halloween-Women-Blue-Cinderella-Dress-Princess-Dress-for-Women-White-Snow-Cosplay-Costume-Party-Dress-Performance.jpg"/>
                              <Details>
                                <ProductName><b>Product:</b> Lorem, ipsum dolor.</ProductName>
                                <ProductId><b>ID:</b> Lorem, ipsum dolor.</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> Lorem.</ProductSize>
                              </Details>  
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <Add />
                                  <ProductAmount>2</ProductAmount>
                                  <Remove />
                              </ProductAmountContainer>
                          </PriceDetail>
                      </Product>
                  </Info>
                  <Summary>Summary</Summary>
              </Bottom>
          </Wrapper>
          <Footer />
      </Container>
  );
};

export default Cart;
