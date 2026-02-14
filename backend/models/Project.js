import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tech_stack: {
      type: [String], // array of technologies
      required: true,
    },

    github_link: {
      type: String,
    },

    category: {
      type: String,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Portfolio_projects", // ✅ your projects collection name
  }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
