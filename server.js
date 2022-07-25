const http = require('http');
const port = 3000;

const rotas = {
  '/': 'Bookstore',
  '/livros': 'Bookstore lista de livros',
  '/autores': 'Autores',
  '/editoras': 'Editoras'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
})
