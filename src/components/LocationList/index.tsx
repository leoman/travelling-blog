import React from 'react';
import LocationPanel from './LocationPanel'
import { LocationListI } from '../../types';
import { Post } from '../../types/post';

export const LocationList: React.FC<LocationListI> = ({ posts, listItemHovered }: LocationListI): React.ReactElement => {
    return posts.filter((post: Post) => !post.location.hideFromBounding).map((post: Post, i: number) => (
        <LocationPanel key={i.toString()} i={i} post={post} listItemHovered={listItemHovered} />
    ))
}

export default LocationList;