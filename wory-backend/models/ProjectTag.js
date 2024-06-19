const mongoose = require('mongoose');

const ProjectTagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('ProjectTag', ProjectTagSchema);
