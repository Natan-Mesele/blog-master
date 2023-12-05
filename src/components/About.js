import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <Containers>
            <ItemText>
                <h1>The Internet Is for Everyone</h1>
                <p>This vision drives everything we do.</p>
            </ItemText>
        </Containers>
        <Item>
        <p>The Internet is a place of possibility and opportunity. It is where we collaborate and innovate for a better world. Where we share our hopes and strengthen our bonds. It is where we work, learn, and make progress.
            We are a global charitable organization empowering people to keep the Internet a force for good: open, globally connected, secure, and trustworthy.
            We are the I nternet Society. People are at the heart of our mission.
        </p>
        </Item>
        <Info>
            <h1>What We Do</h1>
            <p>We believe everyone should be able to benefit from an open and trusted Internet. This value forms the pillars of our work.</p>

            <InfoList>
                <li>
                    <img src="img/girl-encryption.jpg"/>
                    <h3>1 in 3 people lack Internet access.</h3>
                    <p>Because everyone should have access to this life-changing resource, we are passionate about closing the digital divide.</p>
                </li>
                <li>
                    <img src="img/girl-encryption.jpg"/>
                    <h3>1 in 3 people lack Internet access.</h3>
                    <p>Because everyone should have access to this life-changing resource, we are passionate about closing the digital divide.</p>
                </li>
                <li>
                    <img src="img/girl-encryption.jpg"/>
                    <h3>1 in 3 people lack Internet access.</h3>
                    <p>Because everyone should have access to this life-changing resource, we are passionate about closing the digital divide.</p>
                </li>
            </InfoList>
        </Info>
    </Container>
  )
}

export default Detail

const Containers = styled.div`

`
const Container = styled.div`
    min-height: calc(75vh - 70px);
    width: 100vw;
    height: 75vh;
    background-image: url('img/Works-in-Nepal-768x450.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
`
const Item =styled.div`
   text-align: center;
   padding: 0 1rem;

   @media(min-width: 768px){
    padding: 2rem 12rem;
    }
    
    p {
        font-weight: normal;
        text-align: left;
        line-height: 1.8rem;
    }
`

const ItemText = styled.div`
    text-align: center;
    padding: 25vh 1rem;

    @media(min-width: 768px){
        padding: 25vh 14rem;
    }

    h1 {
        
        text-align: left;
        color: white;
        font-size: 2rem;
    }

    p {
        text-align: left;
        color: white;
        font-size: 1.8rem;
    }
`
const Info = styled.div`
    background: rgb(239, 242, 236);
    padding-top: 3rem;
`
const InfoList = styled.div`
    margin: .5rem;
    padding: 1rem;

    h3, p {
        text-align: left;
    }

    @media(min-width: 768px){
        display: grid;
        gap: 50px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding: 0 8rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`