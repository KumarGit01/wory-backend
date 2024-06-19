const ProjectTag = require('../models/ProjectTag');

// POST /api/tags - Create a new tag
exports.createTag = async (req, res) => {
  try {
    const { name } = req.body;

    const newTag = new ProjectTag({
      name,
    });

    await newTag.save();

    res.status(201).json(newTag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/tags - Get all tags
exports.getAllTags = async (req, res) => {
  try {
    const tags = await ProjectTag.find();
    res.json(tags);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/tags/:id - Get tag by ID
exports.getTagById = async (req, res) => {
  try {
    const tag = await ProjectTag.findById(req.params.id);

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// PUT /api/tags/:id - Update tag by ID
exports.updateTag = async (req, res) => {
  try {
    const { name } = req.body;

    let tag = await ProjectTag.findById(req.params.id);

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    tag.name = name;

    await tag.save();

    res.json(tag);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE /api/tags/:id - Delete tag by ID
exports.deleteTag = async (req, res) => {
  try {
    let tag = await ProjectTag.findById(req.params.id);

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    await tag.remove();

    res.json({ message: 'Tag removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
