"use client";

import { useState, useEffect } from "react"

interface Certification {
  _id: string
  title: string
  issuer: string
  issue_date?: string
}

export default function Certifications() {

  const [certifications, setCertifications] = useState<Certification[]>([])

  useEffect(() => {
    fetch("https://portfolio-backend-ynnm.onrender.com/api/certifications")
      .then(res => res.json())
      .then(data => setCertifications(data))
  }, [])

  return (
  <section
    id="certifications"
    className="min-h-screen bg-gray-950 text-white py-20 px-6"
  >
    <h2 className="text-4xl font-bold text-center mb-12">
      Certifications
    </h2>

    {certifications.length === 0 ? (
      <p className="text-center text-gray-400">
        No certifications found
      </p>
    ) : (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {certifications.map(cert => (

          <div
            key={cert._id}
            className="
              bg-gray-900 
              border border-gray-800
              rounded-xl 
              p-6
              shadow-lg
              hover:shadow-blue-500/20
              hover:scale-105
              transition-all duration-300
            "
          >

            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              {cert.title}
            </h3>

            <p className="text-gray-300 mb-2">
              Issued by: {cert.issuer}
            </p>

            {cert.issue_date && (
              <p className="text-gray-500 text-sm">
                {new Date(cert.issue_date).toLocaleDateString()}
              </p>
            )}

          </div>

        ))}

      </div>
    )}
  </section>
)
}