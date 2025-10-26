// 2====================================================== CONFIGURACIÓN DEL PROYECTO ======================================================

const express = require("express");
const app = express();
const booksData = require("./data/books.json");

app.use(express.json());

// ====================================================== RUTAS ======================================================

// GET http://localhost:3000/books/...

// 1. Crea una ruta /all para obtener todos los libros
app.get("/all", (req, res) => {
  res.json(booksData);
});

// 2. Crea una ruta /first para obtener el primer libro
app.get("/first", (req, res) => {
  res.json(booksData[0]);
});

// 3. Crea una ruta /last para obtener el último libro
app.get("/last", (req, res) => {
  res.json(booksData[booksData.length - 1]);
});

// 4. Crea una ruta /middle para obtener el libro en la mitad (número 50 en el array)
app.get("/middle", (req, res) => {
  const middleIndex = Math.floor(booksData.length / 2) - 1;
  res.json(booksData[middleIndex]);
});

// 5. Crea una ruta /author/dante-alighieri para obtener SÓLO EL TÍTULO del libro de Dante Alighieri
app.get("/author/dante-alighieri", (req, res) => {
  const book = booksData.find(book => book.author === "Dante Alighieri");
  res.json(book.title);
});

// 6. Crea una ruta /country/charles-dickens para obtener SÓLO EL PAÍS del libro de Charles Dickens
app.get("/country/charles-dickens", (req, res) => {
  const book = booksData.find(book => book.author === "Charles Dickens");
  res.json(book.country);
});

// 7. Crea una ruta /year&pages/cervantes para obtener LAS PÁGINAS Y EL AÑO del libro de Miguel de Cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const book = booksData.find(book => book.author === "Miguel de Cervantes");
  res.json({ pages: book.pages, year: book.year });
});

// 8. Crea una ruta /country/count/spain para obtener EL NÚMERO DE LIBROS de España
app.get("/country/count/spain", (req, res) => {
  const count = booksData.filter(book => book.country === "Spain").length;
  res.json(count);
});

// 9. Crea una ruta /country/at-least/germany para obtener VERDADERO O FALSO dependiendo de si hay o no un libro de Alemania
app.get("/country/at-least/germany", (req, res) => {
  const hasGermanBook = booksData.some(book => book.country === "Germany");
  res.json(hasGermanBook);
});

// 10. Crea una ruta /pages/all-greater/200 para obtener VERDADERO O FALSO dependiendo de si todos los libros tienen más de 200 páginas
app.get("/pages/all-greater/200", (req, res) => {
  const allGreater200 = booksData.every(book => book.pages > 200);
  res.json(allGreater200);
});

// ====================================================== CONEXIÓN DEL PUERTO ======================================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});