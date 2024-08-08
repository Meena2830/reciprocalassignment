const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel'); // Adjust the path as needed

// Create a new project
router.post('/', async (req, res) => {
    try {
        const { projectName, projectDescription } = req.body;

        if (!projectName || !projectDescription) {
            return res.status(400).json({ error: 'Project name and description are required' });
        }

        const newProject = new Project({ projectName, projectDescription });
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
