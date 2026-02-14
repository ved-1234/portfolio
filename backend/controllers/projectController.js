import Project from "../models/Project.js";

// Get All Projects
export const getProjects = async (req, res) => {
  try {
   const data = await Project.find().sort({ created_at: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Project
export const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
