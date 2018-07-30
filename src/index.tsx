import * as Express from 'express'
import * as path from 'path'
import * as  React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Hello } from './public/hello'
import { StaticRouter as Router } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { configureStore } from './state/configureStore';
import createMemoryHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import * as StoryModule from "./state/story";

const app: Express.Application = Express();

app.use('/static', Express.static(path.resolve(__dirname, 'public')))

app.get('/*', async (req, res) => {
  const name = 'Marvelous Wololo1'
  const context: StaticRouterContext = {};
  const store = configureStore(createMemoryHistory(),{story:{stories:[]}});
  
  
  var d = StoryModule.actionCreators.search();
  
  d((action:any):void=>{
    console.log(`dispatched ${action.type}`);
  });
  console.log(`Url: ${req.url}`);

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <Provider store={store}>
        <Hello name={name} />
      </Provider>
    </Router>
  )

  const html = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
      <div id="root">${component}</div>
      <script src="/static/home.js"></script>
    </body>
    </html>
  `

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  } else {
    res.send(html)
  }
});

app.get('*', ({}, res) =>
  res
    .status(404)
    .send(
      `<body style="background-color: #3c3c3c;"><h1 style="font-family: sans-serif; color: #c7c7c7; text-align: center;">404 - Not Found</h1></body>`
    )
);
const { PORT = 3000 } = process.env
console.log(`We are starting on port: ${PORT}`);
app.listen(PORT, () => console.log('######## app running ########'))