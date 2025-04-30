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
  {
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 75, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/uwm-logo.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
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
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
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
    review: "Teaomnmi brought precision and a keen eye for detail to our logistics team, streamlining inventory tracking and improving data accuracy across systems. His contributions played a key role in keeping our operations running smoothly.",
    imgPath: "/images/exp11.png",
    logoPath: "/images/logo11.png",
    title: "Logistics Data Coordinator",
    date: "January 2023 - Present",
    responsibilities: [
      "Managed inbound inventory using ERP and warehouse systems to ensure real-time stock accuracy.",
      "Logged and routed high-volume shipments, identifying and escalating data discrepancies.",
      "Coordinated with procurement and quality teams to align inventory with production needs.",
    ],
  },
    {
      review: "Teaomnmi, an honors graduate in Information Science and Technology from UW-Milwaukee, excels in full-stack development, database management, cloud computing, and cybersecurity. He is passionate about problem-solving and building impactful, user-centered solutions.",
      imgPath: "/images/exp22.png",
      logoPath: "/images/logo22.png",
      title:"B.S. Information Science & Technology",
      date: "January 2022 - August 2024",
      responsibilities: [
        "Full-Stack Web Development (HTML, CSS, JavaScript, React, PHP, Python Programming & Scripting)",
        "Database Management (SQL, Data Modeling)",
        "IT Support and Cybersecurity Fundamentals",
        "Systems Analysis & User-Centered Design",
        "Data Analytics and Visualization (Excel, Power BI)",
      ],
  },
  {
    review: "Teaomnmi played a key role at BlueStone, building internal tools with React, Flask, and PostgreSQL. He supported DevOps on AWS, wrote data-sync scripts, and contributed to Agile workflows with clean, reliable code.",
    imgPath: "/images/exp33.png",
    logoPath: "/images/logo33.png",
    title: "Full Stack Developer",
    date: "January 2021 - May 2024",
    responsibilities: [
      "Developed internal dashboards using React and Tailwind CSS.",
      "Built and integrated Flask APIs with PostgreSQL for ticketing systems.",
      "Participated in Agile sprints, standups, and peer code reviews.",
      "Wrote automation scripts to sync customer data across systems.",
      "Deployed updates to AWS with GitHub Actions (EC2 & Lambda).",
    ],
  },
  {
    review: "Teaomnmi served as a technical liaison at Grainger, resolving system issues and customer inquiries with speed and precision. He improved workflows, helped new reps, and consistently exceeded support benchmarks.",
    imgPath: "/images/exp44.png",
    logoPath: "/images/logo44.jpg",
    title: "Technical Support Specialist",
    date: "March 2020 - Dec 2022",
    responsibilities: [
      "Acted as technical liaison resolving product, account, and order system issues.",
      "Troubleshot login, order, and inventory issues using CRM/ERP tools.",
      "Escalated complex problems, contributing to system improvements.",
      "Collaborated with logistics, support, and IT to drive resolutions.",
      "Trained new reps on internal systems and troubleshooting best practices.",
      "Used digital ticketing tools to track cases and meet SLAs.",
      "Recognized for fast issue resolution and high customer satisfaction.",
    ],
  },
];

const expLogos = [
  {
    name: "logo11",
    imgPath: "/images/logo11.png",
  },
  {
    name: "logo22",
    imgPath: "/images/logo22.png",
  },
  {
    name: "logo33",
    imgPath: "/images/logo33.png",
  },
  {
    name: "logo44",
    imgPath: "/images/logo44.jpg",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Teaomnmi. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Teaomnmi was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Teaomnmi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Teaomnmi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Teaomnmi is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Teaomnmi was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Teaomnmi’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Teaomnmi was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/teaomnmi"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/teaomnmi-hoskins-937833173/"
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
