const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// POST /api/tags - Create a new tag
router.post('/', tagController.createTag);

// GET /api/tags - Get all tags
router.get('/', tagController.getAllTags);

// GET /api/tags/:id - Get tag by ID
router.get('/:id', tagController.getTagById);

// PUT /api/tags/:id - Update tag by ID
router.put('/:id', tagController.updateTag);

// DELETE /api/tags/:id - Delete tag by ID
router.delete('/:id', tagController.deleteTag);

module.exports = router;
