  
import React from 'react';
import { MapMarkerI } from '../../../../types';
import { MapMarkerWrapper, MarkerImage } from './styles';

export const MapMarker: React.FC<MapMarkerI> = ({ post : { photo, slug }, hovered }: MapMarkerI): React.ReactElement => (
    <MapMarkerWrapper>
        <MarkerImage hovered={hovered.toString()} to={`/posts/${slug}`} style={{backgroundImage: `url(${photo})`}} />
    </MapMarkerWrapper>
);
export default MapMarker;