const express = require('express');
const app = express();
const paysRouter = require('./routes/router');

app.set('view engine', 'ejs');

app.use(paysRouter);

const PORT = 4000;
const server =app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports=server
