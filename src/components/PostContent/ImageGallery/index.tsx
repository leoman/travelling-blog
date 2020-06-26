import React from 'react'
import { Wrapper, Background, Gradient, Grid, ImageWrapper, Image, H1 } from './styles'

interface Props {
  images: Array<{
      url: string
  }>
  openLightBox(index: number): void
  lightBoxImageCount: number
}

const ImageGallery: React.FC<Props> = ({ images, openLightBox, lightBoxImageCount }: Props) => {

  const getImagePosition = (pos: number): number => Number(pos + (lightBoxImageCount - 1))

  if (!images) return null

  return (
    <Wrapper>
      <Background>
        <Gradient>
          <section>
            <H1>Some more snaps from our adventure</H1>
            <Grid>
              {images.map(({ url }, i) => (
                <ImageWrapper key={i.toString()}>
                  <Image onClick={() => openLightBox(getImagePosition(i))} src={url} alt="" />
                </ImageWrapper>
              ))}
            </Grid>
          </section>
        </Gradient>
      </Background>
    </Wrapper>
  )
}

export default ImageGallery