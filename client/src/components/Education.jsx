import { education } from '../data/data';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">Education</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <div key={index} className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 transition bg-slate-50 dark:bg-slate-900">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
                                </div>
                                <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-blue-600 min-w-[40px]">
                                    <i className={edu.icon}></i>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
