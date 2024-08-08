const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel'); // Adjust the path as needed

// Create a new task
router.post('/', async (req, res) => {
    try {
        const { title, description, status, projectId } = req.body;

        if (!title || !description || !status || !projectId) {
            return res.status(400).json({ error: 'Title, description, status, and projectId are required' });
        }

        const newTask = new Task({ title, description, status, projectId });
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
