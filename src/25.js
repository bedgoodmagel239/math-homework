const http = require('http');

http.get('https://api.github.com/repos/AlibabaCloud/alibaba-cloud-sdk-javascript', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error(err);
});
