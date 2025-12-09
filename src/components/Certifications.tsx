import { useEffect, useState } from 'react';
import { supabase, type Certification } from '../lib/supabase';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('issue_date', { ascending: false });

      if (error) throw error;
      setCertifications(data || []);
    } catch (error) {
      console.error('Error fetching certifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  if (loading) {
    return (
      <section id="certifications" className="min-h-screen flex items-center justify-center bg-black text-white py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading certifications...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-orange-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-all">
                  <Award className="text-orange-500" size={32} />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{cert.issuer}</p>
                  </div>

                  {cert.description && (
                    <p className="text-gray-500 text-sm">{cert.description}</p>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span>{formatDate(cert.issue_date)}</span>
                  </div>

                  {cert.credential_url && (
                    <a
                      href={cert.credential_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-orange-500 text-white hover:text-black rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {certifications.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No certifications available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
