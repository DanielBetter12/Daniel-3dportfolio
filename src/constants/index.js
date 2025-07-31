const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },

];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/frontendsimplifiedlogo.png",
    },
    {
        imgPath: "/images/logos/skinstriclogo.png",
    },
    {
        imgPath: "/images/logos/ultraverselogo.png",
    },

];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "TailwindCSS Developer",
        imgPath: "/images/logos/tailwindcsslogo.png",
    },
    {
        name: "Next.js Developer",
        imgPath: "/images/logos/Next.js.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Developed an interactive web application that uses AI to analyze facial skin conditions from live webcam input.",
        imgPath: "/images/logos/skinstriclogo.png",
        logoPath: "/images/logos/skinstriclogo.png",
        title: "Frontend Developer",
        date: "June 2025- July",
        responsibilities: [
            "Designed and implemented a clean, mobile-responsive UI using React.js and Tailwind CSS, optimized for performance and user experience.",
            "Deployed the project on Vercel for fast, serverless hosting and seamless continuous deployment from GitHub.",
            "Integrated GPT-like model or prompt-based logic for skincare recommendations if text-based analysis is included.",
        ],
    },
    {
        review: "Frontend Development certificate",
        imgPath: "/images/logos/frontendsimplifiedlogo.png",
        logoPath: "/images/logos/frontendsimplifiedlogo.png",
        title: "Full Stack Developer",
        date: "June 2024- June 2025",
        responsibilities: [
            "Programming Languages: TypeScript, JavaScript, HTML, CSS",
            "Frameworks: React, TailwindCSS, Firebase, Supabase, NextJS, Redux, React Query, React Hook Form, Zustand",
            "Tools & Other platforms: Netlify, Vercel, GitHub, Vite, Figma, VsCode, Jest, Stripe, React Testing Libraries",
        ],
    },
    {
        review: "Developed responsive React.js frontend components for NFT display platform utilizing Firebase Authentication and Firestore database, serving 1000+ digital assets.",
        imgPath: "/images/logos/ultraverselogo.png",
        logoPath: "/images/logos/ultraverselogo.png",
        title: "React Native Developer",
        date: "April 2025 - June 2025",
        responsibilities: [
            "Created mobile-responsive layouts using CSS Flexbox and Grid, ensuring consistent display across desktop, tablet, and mobile devices with 98% compatibility.",
            "Integrated RESTful APIs using Axios to retrieve NFT metadata and digital assets, achieving 95% successful request rate and sub-2 second load times.",
            "Implemented user authentication system using Firebase Authentication, resulting in 500+ registered users and secure data management.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [

    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },

];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};