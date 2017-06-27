(function (context) {
  const module = context.d3Viz
  const d3 = context.d3
  const width = 20000
  const height = 250

  const drawBarChart = function (dataset, options) {
    const y = options.y
    const x = options.x
    const yMax = d3.max(dataset, function (data) {
      return data[y]
    })
    const yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([0, height])
    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, width])
      .padding(0.1)

    let svg = context.d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('id', 'bar')
      .attr('viewBox', `0 0 ${width} ${height}`)

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function (d, index) {
        return xScale(index)
      })
      .attr('y', function (d, index) {
        return height - yScale(d[y])
      })
      .attr('width', function (d, index) {
        return xScale.bandwidth()
      })
      .attr('height', function (d) {
        return yScale(d[y]) + 'px'
      })
      // drawing relative fill according to max data
      .attr('fill', function (d) {
        let normalizedRGB = Math.round((d[y] / yMax) * 255)
        return `rgb(0,0, ${normalizedRGB})`
      })

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d[y]
      })
      .attr('x', function (data, index) {
        return xScale(index) + (xScale.bandwidth() / 2)
      })
      .attr('y', function (data, index) {
        return (height - yScale(data[y])) + 15
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d[x]
      })
      .attr('x', function (data, index) {
        return xScale(index) + (xScale.bandwidth() / 2)
      })
      .attr('y', function (data, index) {
        return height + 15
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
  }
  module.drawBarChart = drawBarChart
})(window)
