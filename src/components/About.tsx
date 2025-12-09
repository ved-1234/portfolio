import { GraduationCap, Code, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-6xl font-bold text-orange-500 border-2 border-orange-500/30">
                VC
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Ved Chaudhari, a passionate developer currently in my final year of Computer
              Engineering. I specialize in building modern web applications and exploring the
              fascinating world of artificial intelligence and machine learning.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy creating
              seamless user experiences while implementing robust server-side solutions. My journey
              in tech has been driven by curiosity and a constant desire to learn and innovate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
                <GraduationCap className="text-orange-500 mb-4" size={32} />
                <h3 className="text-white font-bold text-lg mb-2">Education</h3>
                <p className="text-gray-400 text-sm">BE Computer Science</p>
                <p className="text-orange-500 text-sm font-semibold">CGPA: 7.04</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
                <Code className="text-orange-500 mb-4" size={32} />
                <h3 className="text-white font-bold text-lg mb-2">Projects</h3>
                <p className="text-gray-400 text-sm">Web Development</p>
                <p className="text-gray-400 text-sm">AI/ML Solutions</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
                <Award className="text-orange-500 mb-4" size={32} />
                <h3 className="text-white font-bold text-lg mb-2">Expertise</h3>
                <p className="text-gray-400 text-sm">Full Stack</p>
                <p className="text-gray-400 text-sm">Machine Learning</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/ved-chaudhari/508b5fa7-baae-4756-8a16-c4f682b9ca54?view=html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
