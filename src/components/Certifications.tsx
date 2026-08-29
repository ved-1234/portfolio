"use client";

import { useState, useEffect } from "react";

interface Certification {
  _id: string;
  title: string;
  issuer: string;
  issue_date?: string;
}

interface CertificationsProps {
  onLoaded?: () => void;
}

export default function Certifications({
  onLoaded,
}: CertificationsProps) {

  const [certifications, setCertifications] = useState<
    Certification[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchCertifications = async () => {

      try {

        const res = await fetch(
          "https://portfolio-1-05bk.onrender.com/api/certifications"
        );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch certifications"
          );
        }

        const data = await res.json();

        console.log(
          "Certifications from backend:",
          data
        );

        setCertifications(data);

      } catch (err: any) {

        console.error(
          "Certifications API error:",
          err
        );

        setError(err.message);

      } finally {

        setLoading(false);

        // Tell App that Certifications API has finished
        onLoaded?.();
      }

    };

    fetchCertifications();

  }, []);

  // Loading
  if (loading) {

    return (
      <section
        id="certifications"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center"
      >
        <p className="text-gray-400">
          Loading certifications...
        </p>
      </section>
    );

  }

  // Error
  if (error) {

    return (
      <section
        id="certifications"
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center"
      >
        <p className="text-red-500">
          {error}
        </p>
      </section>
    );

  }

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

          {certifications.map((cert) => (

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

                  {new Date(
                    cert.issue_date
                  ).toLocaleDateString()}

                </p>

              )}

            </div>

          ))}

        </div>

      )}

    </section>

  );
}