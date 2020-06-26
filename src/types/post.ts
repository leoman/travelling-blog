import { Location } from './location'
import { Photo } from './photo'

export enum Status {
  live = "live",
  draft = "draft"
}

export interface Post {
  id?: number
  title: string
  slug?: string
  titleColour?: string
  content?: string
  date?: Date | string
  order?: Date | string
  photo?: string
  status?: Status
  location?: Location
  photos?: Photo[]
}

export interface GeoPost extends Post {
  y: number
  x: number
}