import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { mount } from 'enzyme'
import { act } from "react-dom/test-utils"
import renderer from 'react-test-renderer'
import '../../setup'
import MapMarker from '../../../components/Map/MapMarkers/MapMarker'
import { MapMarkerI } from '../../../types'

let wrapper = null
beforeEach(() => {
  wrapper = null
})

afterEach(() => {
  wrapper = null
})

const markerProps: MapMarkerI = {
  post: {
    title: 'Tongariro Crossing',
    slug: 'Tongariro-Crossing',
    photo: 'https://live.staticflickr.com/1959/44695030985_da4b577d9a_b.jpg',
  },
  lat: -21.209277,
  lng: -159.749581,
  hovered: true
}

describe('MapMarker', () => {

  it('should render when given the correct props', () => {
    const { post, hovered, lat, lng } = markerProps
    const tree = renderer
      .create(<Router><MapMarker post={post} hovered={hovered} lat={lat} lng={lng} /></Router>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should be highlighted when that is passed in true', () => {
    const { post, hovered, lat, lng } = markerProps
    act(() => {
      wrapper = mount(<Router><MapMarker post={post} hovered={hovered} lat={lat} lng={lng} /></Router>)
    })

    expect(wrapper.find('MapMarker').prop('hovered')).toEqual(true)
  })
})