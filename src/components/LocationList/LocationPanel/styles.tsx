import styled from 'styled-components';
import { Link } from "react-router-dom";

export const PanelWrapper = styled(Link)`
    height: 150px;
    width: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    display: block;
    text-decoration: none;
`;

export const ImagePane = styled.img`
    object-fit: cover;
    object-position: 50% 25%;
    transform-origin: 65% 75%;
    transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left:0;
    ${PanelWrapper}:hover & {
        transform: scale(1.3);
    }
`;


export const HoverPanel = styled.div`
    background-color: rgba(0, 0, 0, .2);
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
    ${PanelWrapper}:hover & {
        background-color: rgba(0, 0, 0, 0);
    }
`;

export const Title = styled.span`
    color: #fff;
    padding: 20px;
    font-size: 24px;
    letter-spacing: 1px;
    box-sizing: border-box;
    transition: all 2s cubic-bezier(0.21, 1, 0.84, 1.01);
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-sizing: border-box;
    width: calc(100%);
    ${PanelWrapper}:hover & {
        color: transparent;
    }
`;