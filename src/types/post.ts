import moment from 'moment';
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

export const initialState: Post = {
  title: '',
  titleColour: '',
  content: '',
  photo: '',
  date: new Date(),
  order: new Date(moment().format('YYYY-MM-DD')),
  status: Status.draft,
  location: { 
      location: '',
      duration: 0,
      lat: 0, 
      lng: 0,
      hideFromBounding: false,
  },
  photos: [],
}
