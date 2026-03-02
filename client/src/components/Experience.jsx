import { experience } from '../data/data';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Experience</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">My professional journey and career progression.</p>
                </div>

                <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-700 md:ml-6 pl-8 md:pl-12 relative">
                    {experience.map((job, index) => (
                        <div key={index} className="relative group">
                            {/* Timeline Dot */}
                            <span className={`absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-125 ${job.type === 'primary' ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                                }`}></span>

                            {/* Content Card */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{job.title}</h3>
                                        <p className="text-lg text-primary font-medium mt-1">{job.company}</p>
                                    </div>
                                    <span className={`inline-flex self-start md:self-auto text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap ${job.type === 'primary'
                                        ? 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40'
                                        : 'text-slate-600 bg-slate-200 dark:text-slate-300 dark:bg-slate-700/50'
                                        }`}>
                                        {job.date}
                                    </span>
                                </div>

                                <ul className={`space-y-3 mt-6 ${job.type === 'primary'
                                    ? 'text-slate-600 dark:text-slate-300'
                                    : 'text-slate-500 dark:text-slate-400'
                                    }`}>
                                    {job.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <i className={`fa-solid fa-arrow-right mt-1.5 text-xs ${job.type === 'primary' ? 'text-primary' : 'text-slate-400'
                                                }`}></i>
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
