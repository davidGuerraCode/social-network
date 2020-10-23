const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;
const dbURI = process.env.DB_CONNECTION;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(PORT, () =>
      console.log(`[🚀] Server running on port ${PORT}...`)
    )
  )
  .catch((error) => console.error(error));
