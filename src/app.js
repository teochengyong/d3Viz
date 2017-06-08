(function (context) {
  const d3Viz = context.d3Viz

  // d3Viz.drawBarChartWithDiv(d3Viz.generateRandomDataSet(5))
  d3Viz.drawScatterPlot(d3Viz.generateRandom2DDataSet({
    size: 100,
    scale: 1000
  }))
})(window)
