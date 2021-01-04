const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config=require('./config/key')


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI||config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const postRouter = require('./routes/post');


app.use('/exercises', exercisesRouter);
app.use('/posts', postRouter);
app.use('/users', usersRouter);

if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
