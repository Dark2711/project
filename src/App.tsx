import { Github, Linkedin, Mail, Menu, X, Code, Globe, Database, Server, Twitter } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
              princekumar.me
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transition-transform hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-all hover:translate-y-[-2px]">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-all hover:translate-y-[-2px]">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-all hover:translate-y-[-2px]">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-all hover:translate-y-[-2px]">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
              <a href="#home" className="block hover:text-cyan-400 transition-all hover:translate-x-2">Home</a>
              <a href="#about" className="block hover:text-cyan-400 transition-all hover:translate-x-2">About</a>
              <a href="#projects" className="block hover:text-cyan-400 transition-all hover:translate-x-2">Projects</a>
              <a href="#contact" className="block hover:text-cyan-400 transition-all hover:translate-x-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 px-4 ml-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 animate-slide-left">
              <h2 className="text-slate-400 text-2xl">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold">
                Prince Kumar
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl">
                I craft exceptional digital experiences with modern technologies. 
                Specialized in building robust and scalable applications that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  Contact Me
                </a>
                <div className="flex gap-4 items-center">
                  <a href="https://github.com/dark2711" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/prince-kumar-1964b2281/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://x.com/_PRINCE_KM" className="hover:text-cyan-400 transition-all hover:scale-110">
                    <Twitter size={24} />
                  </a>
                  <a href="mailto:princekumar7406@gmail.com" className="hover:text-cyan-400 transition-all hover:scale-110">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center animate-slide-right">
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="https://avatars.githubusercontent.com/u/116933783?v=4" 
                  alt="Prince Kumar"
                  className="relative rounded-full w-full h-full object-cover border-4 border-slate-800 transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-14 bg-slate-800/50 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-left">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-slate-400">
                With over 2 years of experience in full-stack development, I've worked on a wide range of projects from small business websites to large-scale enterprise applications. My passion lies in creating efficient, scalable, and user-friendly solutions that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-slate-400">React, Tailwind CSS, TypeScript</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-slate-400">Node.js, Express.js, Hono, PostgreSQL, MongoDB</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <p className="text-slate-400">Git, Github, Vscode</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <p className="text-slate-400">Docker</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-right">
              <div className="space-y-4 text-center group">
                <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Code size={32} className="text-cyan-400 transition-transform group-hover:rotate-12" />
                </div>
                <h4 className="font-semibold">Clean Code</h4>
                <p className="text-slate-400">Writing maintainable and efficient code</p>
              </div>
              <div className="space-y-4 text-center group">
                <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Globe size={32} className="text-cyan-400 transition-transform group-hover:rotate-12" />
                </div>
                <h4 className="font-semibold">Web Apps</h4>
                <p className="text-slate-400">Building responsive web applications</p>
              </div>
              <div className="space-y-4 text-center group">
                <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Database size={32} className="text-cyan-400 transition-transform group-hover:rotate-12" />
                </div>
                <h4 className="font-semibold">Databases</h4>
                <p className="text-slate-400">Designing efficient database structures</p>
              </div>
              <div className="space-y-4 text-center group">
                <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Server size={32} className="text-cyan-400 transition-transform group-hover:rotate-12" />
                </div>
                <h4 className="font-semibold">API Design</h4>
                <p className="text-slate-400">Creating robust REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden group animate-fade-in animate-delay-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon....</h3>
                <p className="text-slate-400 mb-4">Coming Soon.....</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden group animate-fade-in animate-delay-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Project Management Tool"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon....</h3>
                <p className="text-slate-400 mb-4">Coming Soon.....</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden group animate-fade-in animate-delay-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="AI Analytics Dashboard"
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon....</h3>
                <p className="text-slate-400 mb-4">Coming Soon.....</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">TensorFlow</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg animate-scale-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all hover:border-cyan-400/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all hover:border-cyan-400/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all hover:border-cyan-400/50"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all hover:border-cyan-400/50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <a href="#" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform inline-block">
                princekumar.me
              </a>
              <p className="text-slate-400 mt-2">Building digital experiences that matter.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/dark2711" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prince-kumar-1964b2281/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/_PRINCE_KM" className="hover:text-cyan-400 transition-all hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="mailto:princekumar7406@gmail.com" className="hover:text-cyan-400 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Prince Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;