import styled from 'styled-components';

export const ContentWrapper = styled.div`
    
    section {
        margin: 0 auto;
        box-sizing: border-box;
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
       
    }
    .margin-top {
        margin-top: 20px;
    }
    .margin-top-40 {
        margin-top: 40px;
    }
    .margin-top-60 {
        margin-top: 60px;
    }
    .margin-bottom {
        margin-bottom: 20px;
    }
    .margin-bottom-40 {
        margin-bottom: 40px;
    }
    .margin-bottom-60 {
        margin-bottom: 60px;
    }
    /* color: #0371ac; */
    h1 {
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 32px;
        line-height: 1.1em;
        font-weight: lighter;
        margin: auto auto;
        padding-top: 15px;
        padding-bottom: 15px;
        letter-spacing: 1px;
        width: 90%;
    }
    h2 {
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 28px;
        line-height: 1.1em;
        font-weight: lighter;
        margin: auto auto;
        padding-top: 15px;
        padding-bottom: 15px;
        letter-spacing: 1px;
        width: 90%;
    }
    h3 {
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 24px;
        line-height: 1.1em;
        font-weight: lighter;
        margin: auto auto;
        padding-top: 15px;
        padding-bottom: 15px;
        letter-spacing: 1px;
        width: 90%;
    }
    
    p {
        margin: auto auto;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: lighter;
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 19px;
        line-height: 1.8rem;
        width: 90%;
    }
    .full-width {
        width: 100%;
    }
    .half-width {
        width: 50%;
        margin: 0 auto;
    }
    .center {
        text-align: center;
    }
    .double {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        &.shrink {
            width: 80%;
        }
        @media (max-width: 767px) {
            flex-direction: column;
        }
        img {
            width: 50%;
            object-fit: cover;
            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }
    strong {
        font-weight: bold;
    }
    .dropcap {
        font-size: 3.55rem;
        float: left;
        margin-right: .15rem;
        line-height: 1;
        font-weight: bold;
    }
    a {
        font-weight: 600;
        text-decoration: none;
        position: relative;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
        background-image: linear-gradient(to top, rgba(0,0,0,0),rgba(0,0,0,0) 1px,#4c6296 2px,#4c6296 2px,rgba(0,0,0,0) 2px);
        cursor: pointer;
        &:hover {
            color: #173061;
            background-image: linear-gradient(to top, rgba(0,0,0,0),rgba(0,0,0,0) 1px,#173061 2px,#173061 2px,rgba(0,0,0,0) 2px);
        }
    }
    img {
        cursor: pointer;
    }
`;

export const DoubleImageWrapper = styled.div``;