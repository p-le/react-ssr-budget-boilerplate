const express = require('express');
const hotReload = './libs/hot-reload';

const app = new express();
const PORT = process.env.PORT || 3000;

consign()
  .include(hotReload)
  .into(app);

app.listen(port);