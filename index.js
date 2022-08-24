const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4300;

app.use(express.static(path.join(__dirname, 'assets')));

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
