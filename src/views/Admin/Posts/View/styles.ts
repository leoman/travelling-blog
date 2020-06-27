import styled from 'styled-components';
import {
    Table as StyledTable,
} from '@bootstrap-styled/v4';

export const Table = styled(StyledTable)`
    &.table {
        td {
            vertical-align: middle;
        }
    }
`;

export const ControlBar = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 32px 30px; 
`;