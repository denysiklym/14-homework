const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Ласкаво просимо на сайт доставки!');
});

app.get('/track/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  res.send(`Відстеження замовлення з ID ${orderId}`);
});

app.use((req, res, next) => {
  res.status(404).send("Сторінку не знайдено");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Щось пішло не так!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});