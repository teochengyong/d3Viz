(function (context) {
  const drawBarChartWithDiv = function (data) {
    let chart = context.d3.select('body')
    chart.selectAll('p')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) { return d * 200 + 'px' })
  }
  context.d3Viz.drawBarChartWithDiv = drawBarChartWithDiv
})(window)
