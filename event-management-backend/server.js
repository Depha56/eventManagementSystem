const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);
// Connect to MongoDB
mongoose
  .connect(configuration.mongoURI)
  .then(() => {
    app.listen(configuration.port, () => {
      console.log("MongoDB is connected");
      console.log("listening on port " + configuration.port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/", (req, res) => {
  console.log("listening server");
  return res.send("server is running");
});