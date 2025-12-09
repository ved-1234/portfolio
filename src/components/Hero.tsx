import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-orange-500 text-sm md:text-base font-semibold uppercase tracking-wider">
                HELLO!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                I'm <span className="text-orange-500">Ved Chaudhari</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                Web Developer & AI/ML Enthusiast
              </p>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              Final Year BE in Computer Science student passionate about building innovative
              web applications and exploring artificial intelligence solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                HIRE ME
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold rounded-full transition-all duration-300"
              >
                MY WORKS
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ved-1234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-orange-500 text-white hover:text-black rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vedchaudhari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-orange-500 text-white hover:text-black rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#contact"
                className="p-3 bg-gray-900 hover:bg-orange-500 text-white hover:text-black rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-8xl font-bold text-orange-500 border-4 border-orange-500/30">
                <img src="/ved_image.jpg" alt="Ved Chaudhari" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
