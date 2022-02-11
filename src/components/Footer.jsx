import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Payment } from '@mui/icons-material';

const Container = styled.div `
    display: flex;
`;

const Logo = styled.h1 `
`;

const Desc = styled.p `
    margin: 20px 0px;
`;

const SocialContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #${props => props.color};
    display: flex;
    align-items: start;
    justify-content: start;
    margin-right: 20px;
`;

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Center = styled.div `
    flex: 1;    
    padding: 20px;
`;

const Title = styled.h3 `
    margin-bottom: 30px;
`;

const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div `
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

// const Payment = styled.img ``;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus exercitationem aut?</Desc>
            </Left>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: 10}} /> Lorem ipsum dolor sit amet.</ContactItem>
                <ContactItem><Phone style={{marginRight: 10}} /> Lorem ipsum.</ContactItem>
                <ContactItem><Mail style={{marginRight: 10}} /> Lorem ipsum dolor sit.</ContactItem>
                <ContactItem><Payment style={{marginRight: 10}} /> Lorem ipsum.</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
