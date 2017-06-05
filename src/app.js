(function (w) {
  const prev = w.d3Viz

  const data = [
    1, 5, 3, 2
  ]
  const d3Viz = {}

  const height = 300
  const width = 300
  barWith = width / data.length - 1

  // const xRange = w.d3.scaleLinear([0, width])
  // const yRange = w.d3.scaelLinear([0, height])
  
  // const xDomain = w.d3.domain(data,xRange)
  // const yDomain = w.d3.domain()
  const draw = function (data) {
    let chart = w.d3
      .select('body') 
      .selectAll('p')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){ return d*5 + 'px'})
  }

  const drawRandom = function () {
    let dataSet = []
    for( let i=0; i<25; i++ ) {
      dataSet.push(Math.round(Math.random() * 30))
    }
    let chart = w.d3
      .select('body') 
      .selectAll('p')
      .data(dataSet)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){ return d*5 + 'px'})
  }

  d3Viz.draw = draw
  d3Viz.drawRandom = drawRandom

  window.d3Viz = d3Viz
})(window)