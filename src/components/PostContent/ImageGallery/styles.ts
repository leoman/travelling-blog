import styled from 'styled-components';

interface ImageWrapper {
  readonly rotate: string
}

export const Wrapper = styled.div`
    
    position: relative;
    z-index: 1;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/images/airplanes.jpg');
        background-repeat: repeat;
        filter: grayscale(100%);
    }
`;

export const Background = styled.div`
    position: relative;
    background-color: rgba(61, 67, 81, .7);
    z-index: 10;
`;

export const Gradient = styled.div`
    position: relative;
    background: linear-gradient(to bottom, rgba(61, 67, 81,1) 0%,rgba(125,185,232,0) 100%);
    z-index: 11;
    padding: 30px;
`;

export const Grid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    justify-items: center;
    @media all and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
`;

const randomGen = () => {
    const num = Math.floor(Math.random()*3) + 1;
    const sign = Math.floor(Math.random()*2) === 1 ? 1 : -1;
    return num * sign;
}

export const ImageWrapper = styled.div.attrs(() => ({
    rotate: randomGen(),
  }))<ImageWrapper>`
    overflow: hidden;
    border: 10px solid #ffffff;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    background: #fff;
    display: inline-grid;
    transform: ${props => `rotate(${props.rotate}deg)`};
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,.5);
    }
    
`;

export const Image = styled.img`
    max-width: 100%;
    display: block;
    align-self: center;
    border-radius: 5px;
    transform-origin: 65% 75%;
    transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
    &:hover {
        transform: scale(1.1);
    }
    
`;

export const H1 = styled.h1`
    color: #fff;
    margin: 0 0 20px 0!important;
    font-weight: bold!important;
    font-family: 'Indie Flower', cursive!important;
`;