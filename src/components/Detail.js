import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios";

function Detail() {
    const [blogList, setBlogList] = useState([]);

    const getRef = async () => {
        await axios.get("https://new-blo.prismic.io/api/v2").then((ref) => {
          console.log(ref.data.refs[0].ref, "reference");
          getBlog(ref.data.refs[0].ref);
        });
      };
      
      const getBlog = async (ref) => {
        await axios
          .get(
            `https://new-blo.prismic.io/api/v2/documents/search?ref=${ref}#format=json`
          )
          .then((ref) => {
            console.log(ref.data.results, "data fetch");
            setBlogList(ref.data.results);
          });
      };
    
      useEffect(() => {
        getRef();
      }, []);
    
  return (
    <Container>
        <DetailInfo>
            <Date>
                <p>Strengthening the Internet</p>
                <span>19 October 2023</span>
            </Date>
            <h1>The Internet paves the way for people and communities to thrive.</h1>
            <Info>
                <img src="img/Megan-Kruse-min-150x150.jpg" />
                <Desc>
                    <h3>By Megan Kruse</h3> 
                    <span>Director, Advocacy and Communications</span>
                </Desc>
            </Info>
            <Info>
                <img src="img/ghislain.png" />
                <Desc>
                   <h3>Ghislain Nkeramugaba</h3> 
                    <span>IXP Development Expert</span> 
                </Desc>
            </Info>
            <p>The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease. thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease. </p>
            <p>The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online</p>
            <h2>The Internet paves the way for people and communities to thrive.</h2>
            <p>The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease. thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease. </p>
            <p>The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online</p>
        </DetailInfo>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(50vh - 70px);
    width: 100vw;
    height: 50vh;
    background-image: url('img/background2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
`
const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 20rem;
    
    span {
        margin-top: .8rem;
        font-size: .8rem;
        color: gray;
    }
`

const DetailInfo =styled.div`
   text-align: center;
   padding: 0 2rem;
   @media(min-width: 768px){
    padding: 0 14rem;
   }
   

    h1 {
        padding-top: 2rem;
        font-weight: normal;
        text-align: left;
    }

    h2 {
        text-align: left;
        font-weight: normal;
        line-height: 2.2rem;
    }

    p {
        text-align: left;
        line-height: 1.8rem;
        margin-top: 2rem;
    }
`
const Info = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    color: gray;
    margin-bottom: 1.5rem;
    
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        
    }

    span {
        font-size: 0.9rem;
    }
`
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
        font-size: .8rem;
    }
`