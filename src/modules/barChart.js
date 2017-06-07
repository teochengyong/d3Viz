(function (context) {
  const module = context.d3Viz
  const width = 500
  const height = 100
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

  const drawBar = function () {
    const yScale = 4
    const barWidth = Math.round((width / dataset.length))
    const barPadding = 4
    const maxData = getMax(dataset)
    let svg = context.d3.select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function (d, index) {
        return index * barWidth
      })
      .attr('y', function (d, index) {
        return height - d * yScale
      })
      .attr('width', function (d, index) {
        return (barWidth - barPadding) + 'px'
      })
      .attr('height', function (d) {
        return d * yScale + 'px'
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
        return (index * barWidth) + (barWidth - barPadding) / 2
      })
      .attr('y', function (data, index) {
        return (height - data * yScale) + 15
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
  }
  module.drawBar = drawBar
})(window)
