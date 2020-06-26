import styled from 'styled-components'
import { Link } from "react-router-dom"

interface MarkerImage {
    readonly hovered: boolean
}

export const MapMarkerWrapper = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    pointer-events: all;
`;

export const MarkerImage = styled(Link)<MarkerImage>`
    overflow: hidden;
    background-repeat: no-repeat;
    height: ${props => (props.hovered === 'true') ? '60px' : '25px'};
    width: ${props => (props.hovered === 'true') ? '60px' : '25px'};
    background-size: cover;
    border: 3px solid #ffffff;
    border-radius: 60px;
    display: block;
    pointer-events: all;
    &:hover {
        height: 60px;
        width: 60px;
    }
`;