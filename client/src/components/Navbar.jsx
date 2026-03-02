import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Anuskar<span className="text-primary">.</span>
                </a>

                <div className="hidden md:flex space-x-8 items-center font-medium">
                    <a href="#about" className="text-slate-800 dark:text-slate-200 hover:text-primary transition">About</a>
                    <a href="#skills" className="text-slate-800 dark:text-slate-200 hover:text-primary transition">Skills</a>
                    <a href="#projects" className="text-slate-800 dark:text-slate-200 hover:text-primary transition">Projects</a>
                    <a href="#experience" className="text-slate-800 dark:text-slate-200 hover:text-primary transition">Experience</a>
                    <a href="#contact" className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/30">
                        Contact Me
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="text-2xl text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl text-slate-800 dark:text-slate-200 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-800 border-t dark:border-slate-700 p-4 flex flex-col space-y-4 shadow-lg">
                    <a onClick={toggleMenu} href="#about" className="block hover:text-primary text-slate-800 dark:text-slate-200">About</a>
                    <a onClick={toggleMenu} href="#skills" className="block hover:text-primary text-slate-800 dark:text-slate-200">Skills</a>
                    <a onClick={toggleMenu} href="#projects" className="block hover:text-primary text-slate-800 dark:text-slate-200">Projects</a>
                    <a onClick={toggleMenu} href="#experience" className="block hover:text-primary text-slate-800 dark:text-slate-200">Experience</a>
                    <a onClick={toggleMenu} href="#contact" className="block text-primary font-bold text-slate-800 dark:text-slate-200">Contact Me</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
