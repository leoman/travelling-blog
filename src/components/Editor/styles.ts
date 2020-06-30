import styled from 'styled-components';
import { Textarea as StyledTextArea } from '@bootstrap-styled/v4';

interface Panel {
  readonly show: boolean
}

export const Wrapper = styled.div`
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,0.15);
`;

export const Navigation = styled.div`
    display: flex;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    justify-content: space-between;
    padding: 0 6px;
    border-bottom: 1px solid #ddd;
    color: #555;
    user-select: none;
`;

export const List = styled.ul`
    display: flex;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 4px 6px;
    margin: 8px 4px;
    border-radius: 4px;
    line-height: normal;
`;

export const PanelWrapper = styled.div`
    display: flex;
`;

export const Panel =  styled.div<Panel>`
    display: ${props => (props.show ? 'block' : 'none')}; 
    min-height: 100px;
    flex: 1;
    h1 {
        display: block;
        font-size: 2em;
    }
`;

export const Editor = styled.div`
    width: 100%;
`;

export const Textarea = styled(StyledTextArea)`
    padding: 20px;
    height: 100%;
    min-height: 400px;
    width: 100%;
    outline: none;
    border: none;
    border-right: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
`;

export const RenderedPanel = styled.div`
    padding: 20px;
    min-height: 200px;
`;