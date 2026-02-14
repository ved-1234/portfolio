import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
      required: true,
    },
    issue_date: {
      type: Date,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Portfolio_certifications", // ✅ exact collection name
  }
);

const Certification = mongoose.model("Certification", CertificateSchema);

export default Certification;
