  (function (context) {
    const drawCircles = function () {
      const width = 500
      const height = 300
      let dataSet = context.d3Viz.generateRandomDataSet(5)
      let radius = Math.round(width / dataSet.length) / 2
      let chart = context.d3.select('#svgChart')
      chart.attr('width', width)
        .attr('height', height)
        .selectAll('circle')
        .data(dataSet)
        .enter()
        .append('circle')
        .attr('cx', function (d, index) {
          return index * radius + 2 * radius + 25
        })
        .attr('cy', function (d, index) {
          return index * radius + 2 * radius
        })
        .attr('r', radius)
        .attr('fill', function (d) {
          return `rgba(${Math.round(255 * d)}, ${Math.round(255 * d)}, ${Math.round(255 * d)}, ${d})`
        })
        .attr('stroke', function (d, index) {
          return `rgba(${index / 5 === 1 ? Math.round(255 * d) : 128}, ${Math.round(255 * d)}, ${index / 4 === 1 ? Math.round(255 * d) : 128}, ${d})`
        })
        .attr('stroke-width', '3')
    }
    context.d3Viz.drawCircles = drawCircles
  })(window)

