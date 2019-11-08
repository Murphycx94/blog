const fs = require('fs')
const path = require('path')
const express = require('express')
const ReactDOMServer = require('react-dom/server')
const createApp = require('../dist/entry-server')

const resolve = _path => path.join(__dirname, '..', _path)

const app = express()

app.use('/dist/', express.static(resolve('dist')))
const htmlTemplate = fs.readFileSync(resolve('dist/index.template.html'), 'utf-8')

const render = (req, res) => {
  const reactApp = createApp({}, req.url)
  const fragment = ReactDOMServer.renderToString(reactApp)
  const html = htmlTemplate.replace('<!--react-ssr-outlet-->', fragment)
  res.send(html)
}

app.get('*', render)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
