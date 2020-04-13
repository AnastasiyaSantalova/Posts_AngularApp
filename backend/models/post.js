const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
