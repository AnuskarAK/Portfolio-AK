import { useState } from 'react';
import { projects } from '../data/data';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Featured Projects</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Some things I've built to solve real-world problems.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white shadow-md shadow-blue-500/30'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col border border-slate-100 dark:border-slate-700/50 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-56 relative overflow-hidden bg-slate-100 dark:bg-slate-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors"></div>
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">
                                    {project.problem}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
                                    <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition flex items-center gap-2">
                                        <i className="fa-brands fa-github text-lg"></i> Code
                                    </a>
                                    {project.live && (
                                        <a href={project.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition flex items-center gap-2">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    ></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-slate-900 dark:text-white transition z-10"
                        >
                            <i className="fa-solid fa-xmark text-xl"></i>
                        </button>

                        <div className="h-64 sm:h-80 relative w-full">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-3 inline-block">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{selectedProject.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 sm:p-10">
                            <div className="grid md:grid-cols-3 gap-10">
                                <div className="md:col-span-2 space-y-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                            <i className="fa-solid fa-circle-exclamation text-red-500"></i> The Problem
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{selectedProject.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                            <i className="fa-solid fa-lightbulb text-yellow-500"></i> The Solution
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{selectedProject.solution}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 h-fit">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tags.map((tag, idx) => (
                                            <span key={idx} className="text-sm font-semibold px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition flex items-center justify-center gap-2">
                                            <i className="fa-brands fa-github text-lg"></i> View Source
                                        </a>
                                        {selectedProject.live && (
                                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="w-full py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-bold hover:border-slate-800 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition flex items-center justify-center gap-2">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
