import styled from 'styled-components'

interface NavigationProps {
    readonly navigation: boolean
}

interface NavigationShownProps {
    readonly navigationShown: boolean
}


export const MapViewWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    @media all and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

export const MapWrapper = styled.div<NavigationShownProps>`
    position: relative;
    width: ${props => (props.navigationShown ? '60%' : '100%')};
    @media all and (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`

export const ListWrapper = styled.div<NavigationShownProps>`
    overflow: auto;
    z-index: 6;
    width: ${props => (props.navigationShown ? '40%' : '0')};
    border-left: 1px solid #ffffff;
    @media all and (max-width: 768px) {
        width: 100%;
        border-left: none;
    }
`

export const NavigationToggle = styled.div`
    display: none;
    position: absolute;
    cursor: pointer;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent ;
    border-right: 25px solid #FFFFFF ;
    width: 0 ;
    height: 0;
    top: calc(50% - 12px);
    right: -5px;
    z-index: 5;
    filter: drop-shadow(-2px 2px 8px #000);
    &:hover {
        right: 0;
    }
    @media all and (min-width: 769px) {
        display: block;
    }
`

export const TitleWrapper = styled.div``

export const Title = styled.div<NavigationProps>`
    height: 150px;
    width: 100%;
    overflow: hidden;
    position: relative;
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    align-content: start ;
    display: ${props => (props.navigation ? 'none' : 'flex')};
    @media all and (min-width: 769px) {
        display: ${props => (props.navigation ? 'flex' : 'none')};
        
    }
`