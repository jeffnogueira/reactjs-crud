import React from 'react';
import { Link } from 'react-router-dom'
import { FooterContainer } from './styles';
import Logo from "../../../assets/images/logo.svg";

const Footer = () => {
    
    return (
        <FooterContainer>
            <div className="container">
                <Link to="/home">
                    <img src={Logo} height="30" className="d-inline-block align-top" alt="logo" />
                </Link>
                <span>© Copyright 2020 <a href="https://github.com/jeffnogueira">github.com/jeffnogueira</a> - All Rights Reserved</span>
            </div>
        </FooterContainer>
    );
}

export default Footer;