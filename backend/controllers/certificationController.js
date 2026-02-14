import Certification from "../models/Certification.js";

// Get All Certifications
export const getCertifications = async (req, res) => {
  try {
    const data = await Certification.find().sort({ issue_date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Certification
export const createCertification = async (req, res) => {
  try {
    const newCertification = new Certification(req.body);
    const savedCertification = await newCertification.save();
    res.status(201).json(savedCertification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Certification
export const deleteCertification = async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: "Certification deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

