const Project = require('../models/Project');

// POST /api/projects - Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, client, tags } = req.body;

    const newProject = new Project({
      title,
      description,
      client,
      tags,
    });

    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/projects - Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/projects/:id - Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// PUT /api/projects/:id - Update project by ID
exports.updateProject = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.title = title;
    project.description = description;
    project.tags = tags;

    await project.save();

    res.json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE /api/projects/:id - Delete project by ID
exports.deleteProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.remove();

    res.json({ message: 'Project removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /api/projects/tags/:tagId - Get projects by tag ID
exports.getProjectsByTag = async (req, res) => {
  try {
    const projects = await Project.find({ tags: req.params.tagId });

    res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
