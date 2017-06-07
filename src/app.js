(function (w) {
  const d3Viz = {}

  const height = 400
  const width = 500

  const draw = function (data) {
    let chart = w.d3.select('body')
    chart.selectAll('p')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) { return d * 5 + 'px' })
  }

  const drawRandom = function () {
    let dataSet = []
    for (let i = 0; i < 25; i++) {
      dataSet.push(Math.round(Math.random() * 30))
    }
    let chart = w.d3.select('body')
    chart.selectAll('p')
      .data(dataSet)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) { return d * 5 + 'px' })
  }

  const drawBarsWithSvg = function () {
    let dataSet = []
    for (let i = 0; i < 25; i++) {
      dataSet.push(Math.round(Math.random() * height))
    }
    let barWidth = Math.round(width / dataSet.length)
    let chart = w.select('#svgChart')

    chart.attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(dataSet)
      .enter()
      .append('rect')
      .attr('x', function (d, index) {
        return index * barWidth
      })
      .attr('y', function (d) {
        return Math.round(height - d)
      })
      .attr('width', barWidth - 10)
      .attr('height', function (d) { return d })
      .attr('class', 'bar')
  }

  const drawCirclesWithSvg = function () {
    let dataSet = []
    for (let i = 0; i < 5; i++) {
      dataSet.push(Math.random())
    }
    let radius = Math.round(width / dataSet.length) / 2
    let chart = w.d3.select('#svgChart')

    chart.attr('width', width)
      .attr('height', height)
      .selectAll('circle')
      .data(dataSet)
      .enter()
      .append('circle')
      .attr('cx', function (d, index) {
        return index * radius + 2 * radius
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

  d3Viz.draw = draw
  d3Viz.drawRandom = drawRandom
  d3Viz.drawBarsWithSvg = drawBarsWithSvg
  d3Viz.drawCirclesWithSvg = drawCirclesWithSvg
  window.d3Viz = d3Viz
})(window)
