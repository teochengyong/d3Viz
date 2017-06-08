(function (context) {
  const d3 = context.d3
  const d3Viz = context.d3Viz

  const animate = function () {
    const svg = d3.select('#circles')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')

    const dataset = generateDataSet()

    const circles = svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return d.percent + '%'
      })
      .attr('cy', 0)
      .attr('r', '1%')
  }

  const generateDataSet = function () {
    const points = 100
    const waves = 4
    let dataset = []
    let percent
    let offset

    for (let i = 0; i < 100; i++) {
      percent = i / (points - 1) * 100
      offset = Math.PI * percent * waves * 2
      dataset.push({'percent': percent, 'offset': offset})
    }
    return dataset
  }

  const show = function () {
    d3.select(this).style('opacity', 0).style('display', 'block')
    d3.select(this).transition().duration(500).style('opacity', 1)
  }

  const hide = function () {
    d3.select(this).transition().duration(500).style('opacity', 0)
      .each('end', function () {
        d3.select(this).style('display', 'none')
      })
  }

  d3Viz.animate = animate
})(window)
