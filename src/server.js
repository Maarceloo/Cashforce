const app = require('./app');
const PORT = 3001

app.listen(PORT, async () => {
  console.log(`server running on port ${PORT}`);
});