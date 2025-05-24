let express = require('express');

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
