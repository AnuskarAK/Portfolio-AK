const About = () => {
    return (
        <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-800/50">
            <div className="container mx-auto px-6 max-w-4xl text-center md:text-left">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 relative inline-block">
                        About Me
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900/50 -z-10"></span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I am a dedicated and reliable professional with a strong background in customer service and operations, currently pivoting into the tech industry.
                        I am pursuing a <strong className="text-slate-900 dark:text-slate-100">Bachelor of Information Technology</strong> at Victoria University.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Fluent in English and passionate about problem-solving, I focus on delivering high-quality service and maintaining strict standards.
                        As a <strong className="text-slate-900 dark:text-slate-100">Junior Developer</strong>, I am gaining hands-on experience in modern software workflows, utilizing Git and Agile methodologies to build responsive web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
