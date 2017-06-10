(function (context) {
  const module = context.d3Viz
  const d3 = context.d3
  const width = 600
  const height = 250
  const dataset = [
    5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
  ]

  const getMax = function (array) {
    let curMax
    array.forEach(function (val) {
      if (curMax === undefined) {
        curMax = val
      } else if (val > curMax) {
        curMax = val
      }
    })
    return curMax
  }

  const drawBarChart = function () {
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, height])
    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, width])
      .padding(0.1)

    const maxData = getMax(dataset)
    let svg = context.d3.select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('id', 'bar')

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function (d, index) {
        return xScale(index)
      })
      .attr('y', function (d, index) {
        return height - yScale(d)
      })
      .attr('width', function (d, index) {
        return xScale.bandwidth()
      })
      .attr('height', function (d) {
        return yScale(d) + 'px'
      })
      // drawing relative fill according to max data
      .attr('fill', function (d) {
        let normalizedRGB = Math.round((d / maxData) * 255)
        return `rgb(0,0, ${normalizedRGB})`
      })

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d
      })
      .attr('x', function (data, index) {
        return xScale(index) + (xScale.bandwidth() / 2)
      })
      .attr('y', function (data, index) {
        return (height - yScale(data)) + 15
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
  }
  module.drawBarChart = drawBarChart
})(window)
