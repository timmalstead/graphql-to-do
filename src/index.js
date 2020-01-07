import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { ApolloLink } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "./App"
import * as serviceWorker from "./serviceWorker"

const httpLink = createHttpLink({ uri: "http://localhost:8000/graphql" })

const link = ApolloLink.from([httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
