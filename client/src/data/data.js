export const skills = [
    {
        category: "Frontend",
        icon: "fa-brands fa-react",
        colorClass: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50",
        items: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Vite"]
    },
    {
        category: "Backend",
        icon: "fa-brands fa-node-js",
        colorClass: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50",
        items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"]
    },
    {
        category: "Tools & Others",
        icon: "fa-solid fa-screwdriver-wrench",
        colorClass: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50",
        items: ["Git & GitHub", "VS Code", "Responsive Design", "Agile Methodologies"]
    }
];

export const experience = [
    {
        title: "Junior Developer Trainee",
        company: "Dented Code Academy, Australia",
        date: "Month 2025 – Present",
        type: "primary",
        bullets: [
            "Developed and maintained responsive web applications using React and Tailwind CSS, improving user engagement by delivering modern UI/UX.",
            "Collaborated with senior developers to troubleshoot complex bugs, resulting in a 20% decrease in integration errors.",
            "Implemented full-stack features utilizing Node.js and MongoDB, accelerating the delivery of core application modules.",
            "Participated in Agile sprints and code reviews, ensuring high-quality, maintainable code standards across the team."
        ]
    },
    {
        title: "Team Member (Part-time)",
        company: "Woolworths, Australia",
        date: "Sep 2023 – Present",
        type: "secondary",
        bullets: [
            "Provided personalized product recommendations, elevating the overall customer experience and satisfaction ratings.",
            "Resolved customer inquiries and processed transactions accurately under high-pressure environments.",
            "Managed inventory stock levels and optimized online order picking accuracy to near 100%."
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "MERN Stack E-Commerce",
        category: "Fullstack",
        image: "https://placehold.co/600x400/2563EB/ffffff?text=E-Commerce+App",
        problem: "Small businesses needed an affordable, scalable way to sell products online with built-in authentication.",
        solution: "Developed a full-stack solution featuring a React frontend, Node/Express API, and MongoDB database with JWT user authentication.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        id: 2,
        title: "Interactive Admin Dashboard",
        category: "React",
        image: "https://placehold.co/600x400/10B981/ffffff?text=React+Dashboard",
        problem: "Managers lacked a single pane of glass to view real-time business metrics and user data.",
        solution: "Engineered a responsive React dashboard utilizing Recharts for data visualization and Context API for state management.",
        tags: ["React", "Chart.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        id: 3,
        title: "Contact Form API Microservice",
        category: "Node",
        image: "https://placehold.co/600x400/8B5CF6/ffffff?text=Node+API",
        problem: "Various frontend sites needed a central, reliable way to process and store contact form submissions securely.",
        solution: "Created a Node/Express microservice that validates data, stores it in MongoDB, and prevents spam.",
        tags: ["Node.js", "Express", "MongoDB"],
        github: "#",
        live: null
    },
    {
        id: 4,
        title: "Personal Portfolio V1",
        category: "React",
        image: "https://placehold.co/600x400/475569/ffffff?text=Portfolio+V1",
        problem: "Needed a digital presence to showcase skills and projects to potential employers.",
        solution: "Designed and built a static portfolio website, eventually migrating it to a modern React + Tailwind application.",
        tags: ["React", "Tailwind CSS", "Vite"],
        github: "#",
        live: null
    },
    {
        id: 5,
        title: "Learning Management System (LMS)",
        category: "Fullstack",
        image: "https://placehold.co/600x400/F59E0B/ffffff?text=LMS+Platform",
        problem: "Educational institutions needed a centralized platform for students to access courses, submit assignments, and track their progress.",
        solution: "Developed a comprehensive Full-Stack LMS featuring role-based access control, interactive course modules, and real-time progress tracking.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        github: "#",
        live: "#"
    }
];

export const education = [
    {
        degree: "Master of Applied Information Technology",
        school: "Victoria University",
        date: "Nov 2025 – Present",
        icon: "fa-solid fa-graduation-cap"
    },
    {
        degree: "Bachelor of Information Technology",
        school: "Victoria University",
        date: "Completed Sep 2025",
        icon: "fa-solid fa-graduation-cap"
    },
    {
        degree: "Diploma of Information Technology",
        school: "Victoria University",
        date: "Completed Jun 2023",
        icon: "fa-solid fa-certificate"
    }
];
