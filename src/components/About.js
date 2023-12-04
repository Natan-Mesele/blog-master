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
   padding: 0 10rem;

    p {
        padding-top: 4rem;
        font-weight: normal;
        text-align: left;
        line-height: 1.8rem;
    }
`

const ItemText = styled.div`
    text-align: center;
    padding: 25vh 14rem;
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