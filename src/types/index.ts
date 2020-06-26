import { Post } from './post'

export interface LocationListI {
  posts: Post[]
  listItemHovered(hoveredLocationKey: number): void
}

export interface LocationPanelI {
  post: Post
  listItemHovered(hoveredLocationKey: null | number): void
  i: number
}

export interface MapI {
  posts: Post[]
  hoveredLocationKey: number | null
}

export interface MapMarkersI {
  map: google.maps.Map
  posts: Post[]
  projection: google.maps.MapCanvasProjection
  hoveredLocationKey: number | null
}

export interface MapMarkerI {
  post: Post
  lat: number
  lng: number
  hovered: boolean
}