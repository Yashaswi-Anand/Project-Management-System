const Project = require("../models/Project");

// create a project
exports.createProject = async(req,res) => {
    console.log(req.body);
    try {
        const project = await Project.create({
            title: req.body.title,
            description: req.body.description
        })
        if(!project) {
            return res.status(400).json({message: "Project creation error!!!"})
        }
        return res.status(200).json({message: "Project added successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

// read or fetch all project
exports.getProjects = async(req,res) => {
    console.log(req.params.id);
    try {
        const project = await Project.find()
        if(!project){
            return res.status(400).json({message: "Project fetching error!!!"})
        }
        return res.status(200).json({project: project,message: "Project fetch successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

// delete a project
exports.deleteProject = async(req,res) => {
    console.log(req.params.id);
    try {
        const project = await Project.findByIdAndDelete({_id: req.params.id})
        if(!project){
            return res.status(400).json({message: "Project deletion error!!!"})
        }
        return res.status(200).json({message: "Project delete successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

// update project
exports.updateProject = async(req,res) => {
    
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        })
        if(!project){
            return res.status(400).json({message: "Project updating error!!!"})
        }
        return res.status(200).json({message: "Project updated successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

