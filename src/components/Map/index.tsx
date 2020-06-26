import React, { FunctionComponent, useState, useEffect } from 'react'
import { MapI } from '../../types'
import { Post } from '../../types/post'
import MapMarkers from './MapMarkers'
import { MapWrapper } from './styles'

const Map: FunctionComponent<MapI> = ({ posts, hoveredLocationKey }: MapI): React.ReactElement => {

  const google = window.google
  let gmapScript: HTMLScriptElement | null

  const [ map, setMap ] = useState(null)
  const [ projection, setProjection ] = useState(null)

  // eslint-disable-next-line no-undef
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyAJF1BL1LJ-ZTDQTqEY8ZtrLx-DF__P2GE'

  const getMapBounds = () => {
    const bounds = new window.google.maps.LatLngBounds()	  

    posts.forEach((post: Post) => {	
      bounds.extend(new window.google.maps.LatLng(	
        post.location.lat,	
        post.location.lng,	
      ))	
    })

    return bounds	
  }

  const setFlightPath = (map: google.maps.Map, projection: google.maps.MapCanvasProjection) => {

    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4,
    }

    const path = posts.map((post) => ({
      lat: post.location.lat,
      lng: post.location.lng,
    }))

    const flightPath = new window.google.maps.Polyline({
      path,
      geodesic: false,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px',
      }],
      strokeColor: '#FF0000',
      strokeOpacity: 0,
      strokeWeight: 2,
    })

    flightPath.setMap(map)

    setMap(map)
    setProjection(projection)
  }

  const initMap = () => {

    setTimeout(() => {
      if (!window.google) return
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -6.709618, lng: -2.607743 },
      })

      const bounds = getMapBounds()
      map.fitBounds(bounds)

      // setTimeout(() => {
      //   map.setCenter({ lat: -6.709618, lng: -2.607743 })
      // }, 100)

      const Overlay = new window.google.maps.OverlayView()
      Overlay.setMap(map)
      Overlay.draw = function () { return }
      
      Overlay.onAdd = function () {
        const projection = this.getProjection()
        setFlightPath(map, projection)
      }
    }, 200)
  }

  const attachGoogleScript = () => {
    if (!window.google) {
      gmapScript = document.createElement('script')
      gmapScript.type = 'text/javascript'
      gmapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}`
      const x = document.getElementsByTagName('script')[0]
      if(x.parentNode) x.parentNode.insertBefore(gmapScript, x)
  
      gmapScript.addEventListener('load', () => {
        initMap()
      })
    }
  }

  useEffect(() => {
    attachGoogleScript()
  })
  

  console.count('Map component')

  return (
    <MapWrapper>
      <div style={{ width: '100%', height: '100%', zIndex: 1 }} id="map" />
      {(map && posts && projection) && <MapMarkers map={map} posts={posts} projection={projection} hoveredLocationKey={hoveredLocationKey} />}
    </MapWrapper>
  )

}

export default Map