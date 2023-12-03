import React from "react";
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SendIcon from '@material-ui/icons/Send';
import emailjs from '@emailjs/browser';

  function Footer() {
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_tr8x3hy', 'template_r9zhhsw', e.target, '9vleV_fPHIFflL966');
    }

  return (
    <div>
      <Containers>
      <Container>
        <div className="App">
          <h1 className="page__title">Contact Us</h1>
          <form className="contact__form" onSubmit={sendEmail}>
            <label htmlFor="emailFrom">Email:</label>
            <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="Your Email "/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" className="message__box"></textarea>
            <button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}}>
            Send
          </button>
          </form>
        </div>
          <Media>
            <Twitter style={{ fontSize: '2.5rem' }} /> 
            <LinkedIn style={{ fontSize: '2.5rem' }} />
            <Facebook style={{ fontSize: '2.5rem' }} />
            <Instagram style={{ fontSize: '2.5rem' }} />
            <Youtube style={{ fontSize: '2.5rem' }} />
            <Wifi style={{ fontSize: '2.5rem' }} />
          </Media>
        </Container>
        <Footers>
            <FooterRow>
                <h1>Address</h1>
                <span><img src="img/location.svg" />Ethiopia, Addis abebe</span>
                <span><img src="img/phone.svg" />+251926412563</span>
                <span><img src="img/email.svg" />huluale12@gmail.com</span>
            </FooterRow>
            <FooterRow>
              <h1>Service</h1>
              <span>Magazine</span>
              <span>News</span>
              <span>Live report</span>
            </FooterRow>
        </Footers>
        </Containers>
      </div>
  )
}

export default Footer

const Containers = styled.div`
  background: #24366e;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding: 0 0 2rem;
  cursor: pointer;

  label {
    display: block;
    margin: 1rem 0;
    
  }

   input {
    display: block;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: .5rem;
    border: 1px solid gray;
    border-radius: .3rem;
    outline: none;
  }

  textarea {
    display: block;
    align-items: center;
    margin-bottom: .5rem;
    width: 80%;
    height: 5rem;
    margin: 0 auto;
    padding: .5rem;
    border: 1px solid gray;
    border-radius: .3rem;
    outline: none;
    margin-bottom: 1rem;
  }

  button {
    padding: .6rem 1.4rem;
    border: none;
    border-radius: 5em;
    cursor: pointer;
  }
` 

const Media = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const Facebook = styled(FacebookIcon)`

`
const Instagram = styled(InstagramIcon)`
`
const Twitter = styled(TwitterIcon)`
`
const Youtube = styled(YouTubeIcon)`
`
const LinkedIn = styled(LinkedInIcon)`
`
const Wifi = styled(RssFeedIcon)`
`
const Footers = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
`
const FooterRow = styled.div`
  text-align: left;

  h1 {
    color: white;
    font-size: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  span {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
  }

  img {
    fill: red;
  }
`

