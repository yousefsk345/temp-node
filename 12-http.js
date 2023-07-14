const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("hello to our home page");
  }
  if (req.url === '/about') {
    res.end("this is our short story");
  }
  res.end(`<h1>Ooohhhh my gooooood ohhhhh my gooooood~~!!!!!!!</h1>`)
});

server.listen(5019);
