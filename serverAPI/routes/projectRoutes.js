const express = require('express')
const { createProject, deleteProject, getProjects, updateProject } = require('../controller/projectController')
const route = express.Router()

// create project
route.post('/createProject', createProject)
// fetch all project
route.get('/getProjects', getProjects)
// delete project
route.delete('/deleteProject/:id', deleteProject)
// update project
route.patch('/updateProject/:id',updateProject)


module.exports = route