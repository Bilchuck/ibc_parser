const fetch = require('node-fetch')

const mizhbankController = (req, res) => {
  return fetch('https://ibc.ua/')
    .then(r => r.text())
    .then(t => {
      const headers = t
        .split('id="forex-table"')[1]
        .split('role="tabpanel"')[0]
        .split('th style="width:26%;" class="text-center">')
        .slice(1)
        .map(h => h.split('</th')[0])
      const values = t
        .split('id="forex-table"')[1]
        .split('role="tabpanel"')[0]
        .split('<td class="text-left">')
        .slice(1)
        .map(r => r
          .split('<td class="text-center')
          .slice(1)
          .map(c => c
            .split('>')[1]
            .split('</td')[0]
            .split('</td')[0]
          )
          .map(parseFloat)
        )

      res.send({ headers, values })
    })
}

module.exports = mizhbankController
