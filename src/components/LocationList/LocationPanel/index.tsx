  
import React from 'react';
import { PanelWrapper, ImagePane, HoverPanel, Title } from './styles';
import { LocationPanelI } from '../../../types';

export const LocationPanel: React.FC<LocationPanelI> = ({ post: { title, photo, slug }, listItemHovered, i }: LocationPanelI): React.ReactElement => (
    <PanelWrapper to={`/posts/${slug}`} onMouseEnter={() => listItemHovered(i)} onMouseLeave={() => listItemHovered(null)} >
        <ImagePane src={photo} />
        <HoverPanel>
            <Title>{title}</Title>
        </HoverPanel>
    </PanelWrapper>
);

export default LocationPanel