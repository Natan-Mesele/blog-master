import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <Item>
        <p>The Internet is a place of possibility and opportunity. It is where we collaborate and innovate for a better world. Where we share our hopes and strengthen our bonds. It is where we work, learn, and make progress.

We are a global charitable organization empowering people to keep the Internet a force for good: open, globally connected, secure, and trustworthy.

We are the I nternet Society. People are at the heart of our mission.</p>

        </Item>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(75vh - 70px);
    width: 100vw;
    height: 75vh;
    background-image: url('img/Works-in-Nepal-768x450.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
`
const Item =styled.div`
   text-align: center;
   padding: 8rem 14rem;

    p {
        padding-top: 22rem;
        font-weight: normal;
        text-align: left;
    }

    img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
        display: flex;
    }

    p {
        text-align: left;
        line-height: 1.8rem;
        margin-top: 2rem
    }
`
const Info = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    color: gray;

    span {
        font-size: 0.9rem;
    }
`