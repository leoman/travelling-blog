import React, { useState, useEffect } from 'react'
import { Post, GeoPost } from '../../../types/post'
import { MapMarkersI } from '../../../types'
import MapMarker from './MapMarker'
import { debounce } from '../../../utils'
import { MapMarkerWrapper, MapMarkersWrapper, MapMarkersOverlay } from './styles'

const MapMarkers: React.FC<MapMarkersI> = ({ posts, map, projection, hoveredLocationKey }: MapMarkersI): React.ReactElement => {

  const [ markers, setMarkers ] = useState([])
  const [ initRender, setInitRender ] = useState<boolean>(false)
  const listenerList: string[] = [
    'drag',
    'idle',
    'zoom_changed',
    'projection_changed',
    'center_changed',
    'bounds_changed',
  ]

  const setMarkerPixels = (): void => {
    const markers = posts.filter((post: Post) => !post.location.hideFromBounding).map((post: Post): GeoPost => {
      const latLng = new window.google.maps.LatLng(post.location.lat, post.location.lng)
      return {
        ...post,
        ...projection.fromLatLngToContainerPixel(latLng),
      }
    })
    setMarkers(markers)
  }

  const debouncedSetMarkerPixels = debounce(setMarkerPixels, 300)

  const renderMarkers = () => markers.map((post: GeoPost, i: number) => {
    const renderedMapMarkers = (
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      <MapMarkerWrapper key={i} top={post.y.toString()} left={post.x.toString()} hovered={Boolean(i === hoveredLocationKey)}>
        <MapMarker
          key={i}
          lat={post.location.lat}
          lng={post.location.lng}
          hovered={Boolean(i === hoveredLocationKey)}
          post={post}
        />
      </MapMarkerWrapper>
    )
    return renderedMapMarkers
  })
  

  const addEventListeners = (): void => listenerList.forEach((listener: string) => map.addListener(listener, debouncedSetMarkerPixels))

  const removeEventListeners = (): void => listenerList.filter((listener: string) => listener !== 'zoom_changed').forEach((listener: string) => window.google.maps.event.clearListeners(map, listener))

  useEffect(() => {
    addEventListeners()
    debouncedSetMarkerPixels()
    setInitRender(true)

    return function cleanup() {
      removeEventListeners()
    }
    // eslint-disable-next-line
  }, [initRender])

  return (
    <MapMarkersWrapper>
      <MapMarkersOverlay>
        {renderMarkers()}
      </MapMarkersOverlay>
    </MapMarkersWrapper>
  )

}

export default MapMarkers