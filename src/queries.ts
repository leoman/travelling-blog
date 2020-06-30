import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      auth
      token
    }
  }
`

export const All_POSTS = gql`
  query allPosts($status: String) {
    allPosts(status: $status) {
      id
      title
      slug
      titleColour
      date
      order
      status
      photo
      location {
        location
        lat
        lng
        hideFromBounding
      }
    }
  }
`
export const GET_POST = gql`
  query post($id: String, $slug: String) {
    post(id: $id, slug: $slug) {
      id
      title
      slug
      titleColour
      date
      order
      status
      photo
      content
      location {
        location
        lat
        lng
        duration
        hideFromBounding
      }
      photos {
        id
        url
      }
    }
  }
`

export const CREATE_POST = gql`
 mutation addPost(
  $title: String!,
  $titleColour: String,
  $content: String,
  $date: String,
  $order: String,
  $photo: String,
  $status: Status,
  $location: String,
  $lat: Float,
  $lng: Float,
  $duration: Int,
  $hideFromBounding: Boolean
) {
  addPost (
    title: $title,
    titleColour: $titleColour,
    content: $content,
    date: $date,
    order: $order,
    photo: $photo,
    status: $status,
    location: $location,
    lat: $lat,
    lng: $lng,
    duration: $duration,
    hideFromBounding: $hideFromBounding
  ) {
      id
      title
      slug
      titleColour
      content
      date
      order
      photo
      status
      location {
        location
        lat
        lng
        duration
        hideFromBounding
      }
    }
  }
`

export const EDIT_POST = gql`
 mutation editPost(
  $id: String!
  $title: String!,
  $titleColour: String,
  $content: String,
  $order: String,
  $photo: String,
  $status: Status,
  $location: String,
  $lat: Float,
  $lng: Float,
  $duration: Int,
  $hideFromBounding: Boolean
) {
  editPost (
    id: $id,
    title: $title,
    titleColour: $titleColour,
    content: $content,
    order: $order,
    photo: $photo,
    status: $status,
    location: $location,
    lat: $lat,
    lng: $lng,
    duration: $duration,
    hideFromBounding: $hideFromBounding
  ) {
      id
      title
      slug
      titleColour
      content
      date
      order
      photo
      status
      location {
        location
        lat
        lng
        duration
        hideFromBounding
      }
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id) {
      success
      message
    }
  }
`

export const ADD_PHOTO = gql`
  mutation addPhoto($id: String!, $url: String!) {
    addPhoto(id: $id, url: $url) {
      id
      url
    }
  }
`

export const DELETE_PHOTO = gql`
  mutation deletePhoto($id: String!) {
    deletePhoto(id: $id) {
      success
      message
      id
    }
  }
`