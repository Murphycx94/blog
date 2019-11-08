import React from 'react'
import { StaticRouter } from 'react-router-dom'
import App from '../App'

export default function createApp(context, url) {
  return (
    <StaticRouter context={context} location={url}>
      <App />
    </StaticRouter>
  )
}
