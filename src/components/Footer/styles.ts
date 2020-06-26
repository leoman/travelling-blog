import styled from 'styled-components';
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
    padding: 30px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        width: 100%;
        padding: 0 30px;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 768px;
    }
    @media (max-width: 1230px) and (min-width: 1024px) {
        width: 768px;
    }
    @media (min-width: 1230px) {
        width: 768px;
    }
    @media (min-width: 1400px) {
        width: 1024px;
    }
`;

export const Links = styled.div`
    @media all and (max-width: 768px) {
        padding-bottom: 20px;
    }
`;

export const FooterLink = styled(Link)`
    display: block;
    padding-top: 15px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000000;
    text-transform: uppercase;
    font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
`

export const CopyRight = styled.div`
    font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    @media all and (max-width: 768px) {
        padding: 20px;
        line-height: 1.2;
    }
`;