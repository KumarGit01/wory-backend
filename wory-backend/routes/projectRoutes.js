const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// POST /api/projects - Create a new project
router.post('/', projectController.createProject);

// GET /api/projects - Get all projects
router.get('/', projectController.getAllProjects);

// GET /api/projects/:id - Get project by ID
router.get('/:id', projectController.getProjectById);

// PUT /api/projects/:id - Update project by ID
router.put('/:id', projectController.updateProject);

// DELETE /api/projects/:id - Delete project by ID
router.delete('/:id', projectController.deleteProject);

// GET /api/projects/tags/:tagId - Get projects by tag ID
router.get('/tags/:tagId', projectController.getProjectsByTag);

module.exports = router;
