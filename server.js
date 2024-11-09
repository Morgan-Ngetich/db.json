const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve db.json file
app.get('/db', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
