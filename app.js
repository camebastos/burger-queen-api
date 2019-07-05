const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(4567,console.log('Servidor rodando'));
app.use(require('./routes/user'));
db.sequelize.sync();