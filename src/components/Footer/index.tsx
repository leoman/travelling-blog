import React from 'react';
import moment from 'moment';
import { FooterWrapper, Links, FooterLink, TextWrapper, CopyRight } from './styles';

export const Footer: React.FC = (): React.ReactElement => (
    <FooterWrapper>
       
        <Links>
            <FooterLink to={'/'}>Home</FooterLink>
            <FooterLink to={'/posts'}>Articles</FooterLink>
        </Links>
        
        <TextWrapper>
            <CopyRight>© Copyright {moment(new Date().toISOString()).format("YYYY")} Blink.Dev Limited. All rights reserved.</CopyRight>
        </TextWrapper> 
        
    </FooterWrapper>
);

export default Footer;