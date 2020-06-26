import { gql } from 'apollo-boost';

export const All_POSTS = gql`
  query {
    allPosts {
      id
      title
      slug
      titleColour
      date
      status
      photo
      location {
        location
        lat
        lng
        hideFromBounding
      }
      photos {
        url
      }
    }
  }
`
export const GET_POST = gql`
  query post($slug: String) {
    post(slug: $slug) {
      id
      title
      slug
      titleColour
      date
      status
      photo
      content
      location {
        location
      }
      photos {
        url
      }
    }
  }
`