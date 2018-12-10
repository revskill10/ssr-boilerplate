const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const path = require('path')
const serverConfig = require('./configs/client.js')(process.env.NODE_ENV || 'development');
const fs = new MemoryFS();
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

function compile(callback) {
  console.log('Initializing client application...');
  console.log('Compiling bundle...');
  const serverCompiler = webpack(serverConfig);
  serverCompiler.outputFileSystem = fs;
  serverCompiler.run((err, stats) => {
    outputErrors(err, stats);    
    const contents = fs.readFileSync(path.resolve(serverConfig.output.path, serverConfig.output.filename), 'utf8');
    callback(contents)
  });
}
module.exports = compile