(function (context) {
  const d3Viz = context.d3Viz

  // d3Viz.drawBarChartWithDiv(d3Viz.generateRandomDataSet(5))
  // d3Viz.drawScatterPlot(d3Viz.generateRandom2DDataSet({
  //   size: 100,
  //   scale: 1000
  // }))
  const dataset = [
    5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
  ]
  d3Viz.drawBarChart(dataset)
})(window)
