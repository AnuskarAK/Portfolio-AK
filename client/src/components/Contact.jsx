import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: null, message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorData = await response.json();
                setStatus({ type: 'error', message: errorData.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        }
    };

    return (
        <section id="contact" className="py-24 bg-transparent text-slate-900 dark:text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's Work Together</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        I am actively looking for new opportunities as a Software Engineer.
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center text-xl mb-6">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Me</h3>
                            <a href="mailto:anuskar.thapa.tech@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors break-all">
                                anuskar.thapa.tech@gmail.com
                            </a>
                        </div>

                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center text-xl mb-6">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-slate-600 dark:text-slate-300">Sydney, Australia (Open to Remote)</p>
                        </div>

                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm flex justify-center gap-6">
                            <a href="https://www.linkedin.com/in/anuskar-thapa-120463275" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center text-xl transition-all duration-300" title="LinkedIn">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/AnuskarAK" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-800 hover:text-white rounded-full flex items-center justify-center text-xl transition-all duration-300" title="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-xl">
                        <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>

                        {status.message && (
                            <div className={`p-4 rounded-xl mb-8 flex border items-start gap-3 ${status.type === 'success' ? 'bg-green-900/30 text-green-300 border-green-800/50' :
                                status.type === 'error' ? 'bg-red-900/30 text-red-300 border-red-800/50' :
                                    'bg-blue-900/30 text-blue-300 border-blue-800/50'
                                }`}>
                                {status.type === 'loading' && <i className="fa-solid fa-circle-notch fa-spin mt-1"></i>}
                                {status.type === 'success' && <i className="fa-solid fa-circle-check mt-1"></i>}
                                {status.type === 'error' && <i className="fa-solid fa-circle-exclamation mt-1"></i>}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900 dark:text-white transition-all placeholder-slate-400 dark:placeholder-slate-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900 dark:text-white transition-all placeholder-slate-400 dark:placeholder-slate-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900 dark:text-white transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.type === 'loading'}
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/50 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 group"
                            >
                                {status.type === 'loading' ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
