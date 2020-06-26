import styled from 'styled-components';

interface Text {
  readonly titleColour: string
}

export const PostViewWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    margin: 0 auto 0px;
    
    @media (max-width: 1230px) and (min-width: 1024px) {
        width: 1024px;
    }
    @media (min-width: 1230px) {
        width: 1024px;
    }
    @media (min-width: 1400px) {
        width: 1230px;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 768px;
    }
    
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const TitleWrapper = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 300px;
    @media (max-width: 767px) {
        height: 300px;
    }
    @media (max-width: 1023px) and (min-width: 768px) {
        height: 300px;
    }
    @media (min-width: 1230px) {
        height: 300px;
    }
    @media (min-width: 1400px) {
        height: 400px;
    }
    margin: 0 auto 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HoverWrapper = styled.div`
    max-width: 55%;
    margin: 0 auto;
    &::before {
        content: " ";
        position: absolute;
        background: rgba(0, 0, 0, 0);
        height: 100%;
        width: 100%;
        z-index: 1;
        top:0;
        left: 0;
        transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
        ${TitleWrapper}:hover & {
            background: rgba(0, 0, 0, 0.3);
        }
    }
`;

export const TextWrapper = styled.div`
    position: relative;
    
    z-index: 2;
`;

export const Text  = styled.div<Text>`
    color: ${props => (props.titleColour ? props.titleColour : '#000')};
    font-weight: 600;
    font-size: 30px;
    text-transform: none;
    transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
`;

export const Days = styled(Text)`
    position: absolute;
    left: -35px;
    top: -35px;
    ${TitleWrapper}:hover & {
        transform: scale(1.2) translate(-25px, -15px);
    }
`;

export const Title = styled(Text)`
    line-height: 48px;
    font-weight: 200;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    ${TitleWrapper}:hover & {
        transform: scale(1.15);
    }
`;

export const Location = styled(Text)`
    text-align: right;
    position: absolute;
    bottom: -35px;
    right: -35px;
    ${TitleWrapper}:hover & {
        transform: scale(1.2) translate(25px, 15px);
    }
`;

export const ContentWrapper = styled.div`
`;

export const FacebookComments = styled.div`
    iframe {
        width: 100%!important;
    }
`;