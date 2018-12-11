module.exports = (mode, isServer) => {
  if (isServer) {
    return require('./configs/server')(mode)
  } else {
    return require('./configs/client')(mode)
  }
}
