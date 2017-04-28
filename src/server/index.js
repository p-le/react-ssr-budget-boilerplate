import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import counterApp from './reducers'
import App from './containers/App'

const app = Express()
const port = 3000

app.use('/static', Express.static('static'));
app.use(handleRender)

function handleRender(req, res) {
  const store = createStore(counterApp)
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)