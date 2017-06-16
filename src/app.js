(function (context) {
  const d3 = context.d3
  const d3Viz = context.d3Viz

  // d3Viz.drawBarChartWithDiv(d3Viz.generateRandomDataSet(5))
  // d3Viz.drawScatterPlot(d3Viz.generateRandom2DDataSet({
  //   size: 100,
  //   scale: 1000
  // }))
  const dataset = [
    5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
  ]
  function drawMonthlyTaxiPopulationByCompany () {
    const isUnique = function (array, element) {
      return array.length === 0 || !(array.indexOf(element) > -1)
    }
    d3.csv(
      'data/public-transport-capacity-monthly-taxi-population.csv',
      function (taxis) {
        // divide the data by company first
        // then draw the bars
        const comfortTaxis = {
          category: 'comfort',
          xAxis: 'month',
          xData: [],
          yAxis: 'taxi_fleet',
          yData: []
        }
        const pick = function (datas, key) {
          if (!Array.isArray(datas) || datas.length === 0) {
            return []
          }
          var values = []
          datas.forEach(function (data) {
            if (data[key] && typeof data[key] !== 'undefined') {
              values.push(data[key])
            }
          })
          return values
        }
        var taxisCompanies = []
        taxis.forEach(function (taxi) {
          const currentTaxiCompanies = pick(taxisCompanies, 'company')
          if (isUnique(currentTaxiCompanies, taxi.company)) {
          // if (isUnique(pick(taxisCompanies, 'company'), taxi.company)) {
            taxisCompanies.push({
              'company': taxi.company,
              'xAxis': 'month',
              'x': [taxi.month],
              'yAxis': 'taxi fleet',
              'y': [taxi.taxi_fleet]
            })
          } else {
            var taxiCompanyIndex = taxisCompanies.findIndex(function (taxiCompany) {
              return taxiCompany.company === taxi.company
            })
            const taxiCompany = taxisCompanies[taxiCompanyIndex]
            taxiCompany.x.push(taxi.month)
            taxiCompany.y.push(taxi.taxi_fleet)
          }
        })
        console.log(taxisCompanies)
        taxis.map(function (d) {
          d['taxi_fleet'] = parseInt(d['taxi_fleet'])
          return d
        })
        d3Viz.drawBarChart(taxis, {
          'x': 'month',
          'y': 'taxi_fleet'
        })
        // taxisCompanies.forEach(function (taxiCompany) {
        //   d3Viz.drawBarChart(taxiCompany)
        // })
      })
  }
  drawMonthlyTaxiPopulationByCompany()
})(window)
