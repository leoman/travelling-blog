import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

interface Props {
    isOpen: boolean
    lightBoxImages: string[]
    photoIndex: number
    onCloseRequest(): void
    onMovePrevRequest(): void
    onMoveNextRequest(): void
}

export const ImageLightBox: React.FC<Props> = ({ isOpen, lightBoxImages, photoIndex, onCloseRequest, onMovePrevRequest, onMoveNextRequest }: Props): React.ReactElement => {
  if(!isOpen) return null
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <Lightbox
      mainSrc={lightBoxImages[photoIndex]}
      nextSrc={lightBoxImages[(photoIndex + 1) % lightBoxImages.length]}
      prevSrc={lightBoxImages[(photoIndex + lightBoxImages.length - 1) % lightBoxImages.length]}
      onCloseRequest={onCloseRequest}
      onMovePrevRequest={onMovePrevRequest}
      onMoveNextRequest={onMoveNextRequest}
    />
  )
}

export default ImageLightBox