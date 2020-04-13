const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Post = require('./models/post');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const app = express();
mongoose.connect('mongodb+srv://anastasiia:2GjAhRba7Uqnceri@cluster0-dmry3.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to a database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then(result => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: result._id,
    });
  });
});

app.get('/api/posts', (req, res) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully',
        posts: documents
      });
    });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: 'Post successfully deleted!' });
  })
})

module.exports = app;
