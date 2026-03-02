import heroImage from '../assets/AK.png';

const Hero = () => {
    return (
        <header id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-transparent">
            <div className="absolute top-20 right-0 -z-10 w-96 h-96 bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 -z-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 text-sm font-semibold mb-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        Open to Work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                        Hi, I'm <span className="text-primary">Anuskar</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-bold">
                        Full-Stack Developer (MERN) | <span className="text-slate-500 dark:text-slate-400">React • Node • MongoDB</span>
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        I build accessible, responsive, and performant web applications.
                        Based in Sydney, I specialize in transforming complex problems into elegant JavaScript solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#projects" className="px-7 py-3.5 bg-primary text-white text-center rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 font-semibold group flex items-center justify-center gap-2">
                            View Projects
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-center rounded-lg hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition font-semibold flex items-center justify-center gap-2 bg-white dark:bg-slate-800">
                            <i className="fa-solid fa-download"></i> Download Resume
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-2xl text-slate-500 dark:text-slate-400">
                        <a href="https://github.com/AnuskarAk" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-slate-100 transition transform hover:-translate-y-1" title="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/anuskar-thapa-120463275" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:-translate-y-1" title="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:anuskar.thapa.tech@gmail.com" className="hover:text-red-500 transition transform hover:-translate-y-1" title="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center relative mt-10 md:mt-0">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-400 rounded-full rotate-6 transform transition duration-500 group-hover:rotate-12 blur-sm opacity-50 dark:opacity-70"></div>
                        <img
                            src={heroImage}
                            alt="Anuskar Thapa"
                            className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 transition duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
