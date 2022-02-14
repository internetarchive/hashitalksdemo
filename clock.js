var http = require('http')
http.createServer((req, res) => {
  res.end(`the time is: ${new Date()}`)
}).listen(5000)
