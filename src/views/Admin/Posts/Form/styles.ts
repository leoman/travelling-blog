import styled from 'styled-components'

interface PostPhotosShow {
  readonly showPhotos: boolean
}

export const MarkDownEditor = styled.div`
    width: 100%;
    .for-container {
        height: 300px;
    }
    .for-editor-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }
    .for-editor-block {
        width: 100%;
    }
`;

export const PostPhotosShow = styled.div<PostPhotosShow>`
    display: ${props => (props.showPhotos ? 'block' : 'none')};
`;

export const PhotoHeader = styled.h3`
    padding: 20px 0;
`

export const PostImagesContainer = styled.ul`
    width: 100%;
    list-style: none;
    padding: 20px 0;
`;

export const PostImage = styled.img`
    width: 250px;
`;