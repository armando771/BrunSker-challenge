const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const UserRouter = require('./routers/usersRoutes');

const LoginRouter = require('./routers/loginRoute');

const ImoveisRouter = require('./routers/imoveisRoutes');

app.use('/users', UserRouter);

app.use('/login', LoginRouter);

app.use('/imoveis', ImoveisRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
