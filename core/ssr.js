const express = require('express');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs')
const requireFromString = require('require-from-string');
//const MemoryFS = require('memory-fs');
const serverConfig = require('./webpack.config.js')(process.env.NODE_ENV || 'development', true);
//const fs = new MemoryFS();
const dev = process.env.NODE_ENV !== 'production'
const clientConfig = require('./webpack.config.js')(process.env.NODE_ENV || 'development', false);
const outputErrors = (err, stats) => {
  if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
  }

  const info = stats.toJson();
  if (stats.hasErrors()) {
      console.error(info.errors);
  }
  if (stats.hasWarnings()) {
      console.warn(info.warnings);
  }
};

console.log('Initializing server application...');
const app = express();
console.log('Compiling bundle...');
const serverCompiler = webpack(serverConfig);
const clientCompiler = webpack(clientConfig)
//serverCompiler.outputFileSystem = fs;
serverCompiler.run((err, stats) => {
  outputErrors(err, stats);
  const contents = fs.readFileSync(path.resolve(serverConfig.output.path, serverConfig.output.filename), 'utf8');
  const app2 = requireFromString(contents, serverConfig.output.filename);
  
  if (dev) {
    app.use(
      require("webpack-dev-middleware")(serverCompiler, {
          noInfo: true,
          publicPath: serverConfig.output.publicPath
      })
    );
    app.use(
      require("webpack-dev-middleware")(clientCompiler, {
          noInfo: true,
          publicPath: clientConfig.output.publicPath
      })
    );
    
    app.use(require("webpack-hot-middleware")(clientCompiler));
    app.use(require("webpack-hot-middleware")(serverCompiler));
    // static assets
  } else {
    app.get("/dist/client.js", (req, res) => {
      res.sendFile(path.join(clientConfig.output.path, clientConfig.output.filename))
    });  
  }
  
  app.use(express.static("public"));
  app.get('*', app2.default);
  app.listen(3001);
  console.log('Server listening on port 3001!');
});
