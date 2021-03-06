(function (context) {
  const d3Viz = context.d3Viz
  const d3 = context.d3
  const width = 500
  const height = 300
  const padding = 40
  const defaultDataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88],
    [600, 150]
  ]

  const drawScatterPlot = function (dataset) {
    dataset = dataset || defaultDataset
    let svg = d3.select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[0] })])
      .range([padding, width - padding])
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1] })])
      .range([height - padding, padding])
    const rScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1] })])
      .range([0, 5])

    const xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(5)

    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(5)


    svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d, index) {
        return xScale(d[0])
      })
      .attr('cy', function (d, index) {
        return yScale(d[1])
      })
      .attr('r', function (d, index) {
        return rScale(d[1])
      })
      // drawing relative fill according to max data
      .attr('fill', 'black')

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return `${d[0]}, ${d[1]}`
      })
      .attr('x', function (data, index) {
        return xScale(data[0])
      })
      .attr('y', function (data, index) {
        return yScale(data[1])
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'red')
      .attr('text-anchor', 'middle')

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0, ${height - padding})`)
      .call(xAxis)
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${padding}, 0)`)
      .call(yAxis)
  }
  d3Viz.drawScatterPlot = drawScatterPlot
})(window)
