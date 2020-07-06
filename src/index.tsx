import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// eslint-disable-next-line no-undef
const uri = process.env.NODE_ENV === 'development' ? 'https://kirstyandpete-api.herokuapp.com/graphql' : 'https://kirstyandpete-api.herokuapp.com/graphql'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: uri,
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (message === "Context creation failed: Failed to authenticate token.") {
          localStorage.removeItem('token')
        }
      })
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'))
