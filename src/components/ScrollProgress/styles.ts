import styled from 'styled-components';

export const ProgressBar = styled.progress`
    /* Positioning */
    position: fixed;
    left: 0;
    top: 0;
    /* Dimensions */
    width: 100%;
    height: 2px;
    transition: all .5s cubic-bezier(0.21, 1, 0.84, 1.01);
    /* Reset the appearance */
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    /* Get rid of the default border in Firefox/Opera. */
    border: none;
    /* Progress bar container for Firefox/IE10+ */
    background-color: transparent;
    /* Progress bar value for IE10+ */
    color: #0371ac;
    &::-webkit-progress-bar {
        background-color: transparent;
    }
    &::-webkit-progress-value {
        background-color: #0371ac;
        /* background-color: transparent;
        background-image: -webkit-linear-gradient(left, transparent, #0371ac); */
    }
    &::-moz-progress-bar {
        background-color: #0371ac;
        /* background-color: transparent;
        background-image: -moz-linear-gradient(left, transparent, #0371ac); */
    }
`;