import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else  {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container scroll={scroll}>
        <a>
          <img src="img/blog-high-resolution-logo-white-transparent.png" alt="logo"/>
        </a>
        <Menu>
          <a href="#">About Us</a>
          <a href="#">Our Work</a>
          <a href="#">Our impact</a>
          <a href="#">Participate</a>
        </Menu>
        <RightMenu>
            <SearchWrapper>
                <Search />
            </SearchWrapper>
            <button>Make a Donation</button>
        </RightMenu>
        <MenuWrapper>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </MenuWrapper>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#">Our impact</a></li>
          <li><a href="#">Participate</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ scroll }) => (scroll ? '#0c1c2c' : 'transparent')};
  transition: background-color 0.3s ease;
  
  img {
    width: 5em;
    cursor: pointer;
  }
`
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 110px;

  @media (max-width: 768px){
    display: none;
  }

  a {
    text-decoration: none;
    padding: 0 20px;
    font-size:1.1rem;
    font-weight: bold;
    color: white;
  }
`
const RightMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  button {
    text-decoration: none;
    font-size:1rem;
    padding: .6rem 1.4rem;
    background: #eeca4a;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5rem;
    cursor: pointer;

    &:hover {
      border: 3px solid #eeca4a;
      background: none;
    }
  }

  @media (max-width: 768px){
    display: none;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
  
`
const MenuWrapper = styled.div`
    @media (min-width: 767px){
        display: none;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5em 1.5em;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform .6s;

  @media (min-width: 920px) {
    width: 30%;
  }

  li a {
    text-decoration: none;
    display: block;
    padding: 1em 0;
    border-bottom: 1px solid gray;
    color: black;

    &:hover {
      font-weight: bold;
    }
  }

`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: black;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Search = styled(SearchIcon)`
  color: white;
  cursor: pointer;
`
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`