(function () {
  const d3Viz = {}

  const generateRandomDataSet = function (size) {
    let dataSet = []
    for (let i = 0; i < size; i++) {
      dataSet.push(Math.random())
    }
    return dataSet
  }

  d3Viz.generateRandomDataSet = generateRandomDataSet

  window.d3Viz = d3Viz
})(window)
