(function () {
  const d3Viz = {}

  const generateRandomDataSet = function (size) {
    let dataSet = []
    for (let i = 0; i < size; i++) {
      dataSet.push(Math.random())
    }
    return dataSet
  }

  const generateRandom2DDataSet = function (options) {
    let dataSet = []
    let size = options.size
    let scale = options.scale
    let xScale = Math.random() * scale
    let yScale = Math.random() * scale
    for (let i = 0; i < size; i++) {
      dataSet.push([Math.round(Math.random() * xScale), Math.round(Math.random() * yScale)])
    }
    return dataSet
  }

  d3Viz.generateRandomDataSet = generateRandomDataSet
  d3Viz.generateRandom2DDataSet = generateRandom2DDataSet

  window.d3Viz = d3Viz
})(window)
