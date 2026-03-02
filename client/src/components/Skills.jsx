import { skills } from '../data/data';

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Technical Arsenal</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        My core suite of technologies I use to build robust and scalable web applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 hover:border-blue-100 dark:hover:border-blue-900/50"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${skillGroup.colorClass}`}>
                                    <i className={skillGroup.icon}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary hover:border-primary transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
