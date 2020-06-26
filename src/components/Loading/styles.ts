import styled from 'styled-components';

interface FadeProps {
    readonly fade: boolean
}

export const LoadingWrapper = styled.div<FadeProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
    display: flex;
    transition: opacity 1s ease-in-out;
    opacity: ${props => (props.fade) ? 0 : 1}
`;

export const SVGWrapper = styled.div`
    margin: auto;
    width: 300px;
    height: 300px;
    @media all and (max-width: 768px) {
        width: 200px;
        height: 200px;
        padding-left: 20px;
    }
`;

export const SVG = styled.svg`
    width: 100%;
    height: 100%;
    visibility: hidden;
    @media all and (max-width: 768px) {
        width: 200px;
        height: 200px;
    }
`;