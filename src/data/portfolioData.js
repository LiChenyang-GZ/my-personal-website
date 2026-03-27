export const aboutSkills = [
  {
    label: 'Frontend',
    title: 'Frontend Development',
    description:
      'Building clear, responsive interfaces with React, Next.js, TypeScript, and interaction design that feels deliberate.',
    accent: '#ff7a59',
  },
  {
    label: 'Full Stack',
    title: 'Full Stack Engineering',
    description:
      'Working across UI, backend services, APIs, state management, and product logic to ship useful software.',
    accent: '#8b5cf6',
  },
  {
    label: 'Cloud',
    title: 'Cloud and Deployment',
    description:
      'Using AWS services such as Lambda, SNS, S3, EC2, and Aurora MySQL for scalable and production-minded systems.',
    accent: '#f59e0b',
  },
  {
    label: 'AI Apps',
    title: 'AI Application Development',
    description:
      'Applying LangChain, ChatGLM3, and retrieval workflows to build practical tools instead of one-off demos.',
    accent: '#ec4899',
  },
  {
    label: 'Database',
    title: 'Database Systems',
    description:
      'Working with PostgreSQL, Firebase, Supabase, SQL, schema design, and data flows that support real features.',
    accent: '#14b8a6',
  },
  {
    label: 'Testing',
    title: 'Testing and Quality',
    description:
      'Using Playwright, Jest, and test-oriented workflows to make software more reliable and maintainable.',
    accent: '#38bdf8',
  },
];

export const introMessages = [
  'Software engineer building modern web products.',
  'AI application developer focused on practical systems.',
  'Interested in clean interfaces, cloud workflows, and product-minded engineering.',
];

export const tickerSkills = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'Tailwind CSS',
  'Spring Boot',
  'AWS',
  'Firebase',
  'Supabase',
  'Docker',
  'Playwright',
  'Jest',
  'LangChain',
];

export const projects = [
  {
    title: 'Blotz Task',
    period: '07/2025 - Present',
    status: 'In Progress',
    summary:
      'A full-stack task management app spanning web and mobile-style interactions, designed around productivity and smooth UI behavior.',
    details:
      'Built a React + Next.js frontend with Zustand and Tailwind CSS, connected it to a .NET Core backend with SQL Server, and added features including drag calendar views, subtasks sheets, Lottie-based AI interactions, swipe actions, and a points-based progress system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', '.NET Core'],
    image: './personal-website.jpg',
    link: 'https://github.com/LiChenyang-GZ',
  },
  {
    title: 'Distributed E-commerce Platform',
    period: '10/2025',
    status: 'Course Project',
    summary:
      'A distributed commerce platform built to explore reliability, transaction consistency, and maintainable microservice architecture.',
    details:
      'Designed a Spring Boot + RabbitMQ + PostgreSQL system with separated store, bank, and delivery services. Implemented Outbox Pattern, Saga compensation, retry logic, and dead-letter queues, while keeping the Java backend layered and maintainable with JPA/Hibernate and DTO-based design.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Saga', 'Microservices'],
    image: './B2YBooks Online Store.jpg',
  },
  {
    title: 'AWS Image Captioning Platform',
    period: '05/2025',
    status: 'Cloud Project',
    summary:
      'A cloud-native image processing platform built around scaling, automation, and service orchestration on AWS.',
    details:
      'Deployed a Flask app on auto-scaling EC2 instances behind an ALB, used Lambda and SNS for asynchronous caption generation, stored media on S3, managed relational data with Aurora MySQL, and tested performance and fault tolerance under load.',
    tech: ['AWS EC2', 'Lambda', 'SNS', 'S3', 'Aurora MySQL', 'Flask'],
    image: './web-dev.avif',
  },
  {
    title: 'BuildLess Internship',
    period: '08/2025 - Present',
    status: 'Internship',
    summary:
      'Interactive product work for a startup using React, Tailwind CSS, Firebase, and automated testing infrastructure.',
    details:
      'Implemented modular frontend features, validated behavior with the Firebase emulator suite, improved quality with Playwright and Jest, and worked closely with developers and the product owner through agile iteration.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'Playwright', 'Jest'],
    image: './web-dev.jpg',
  },
  {
    title: 'Onboarding AI Assistant',
    period: '2023',
    status: 'AI Application',
    summary:
      'An internal chatbot built to help automate onboarding and policy Q&A with retrieval-based AI support.',
    details:
      'Used LangChain, ChatGLM3, vector retrieval, and document chunking to create a Gradio-based assistant that answered employee questions and reduced repetitive HR support work.',
    tech: ['LangChain', 'ChatGLM3', 'Gradio', 'RAG'],
    image: './ConversationLLM.jpg',
  },
  {
    title: 'Personal Website',
    period: '2025',
    status: 'Portfolio',
    summary:
      'A personal website designed to present my work, experience, and technical direction with stronger visual hierarchy and interaction.',
    details:
      'This portfolio is being redesigned around a better first screen, a cleaner about module, smaller project cards with detail sheets, a more readable experience timeline, and a simpler letter-style contact section.',
    tech: ['React', 'Tailwind CSS', 'EmailJS', 'UI Design'],
    image: './web-dev.avif',
    link: 'https://lichenyang-gz.github.io/my-personal-website/',
  },
];

export const timelineItems = [
  {
    time: '09/2018 - 06/2022',
    title: 'Bachelor of Business Administration',
    subtitle: 'Beijing Normal - Hong Kong Baptist University',
    detail:
      'Built the foundation in information systems, database management, algorithm design, and big data applications, graduating with Second Class Division I honors.',
    tags: ['Information Systems', 'Database', 'Algorithms'],
  },
  {
    time: '12/2021',
    title: 'Conference Publication',
    subtitle: 'ICEB 2021',
    detail:
      'Published research on user engagement in online communities during COVID-19, focused on sentiment analysis and online interaction patterns.',
    tags: ['Research', 'Publication', 'Sentiment Analysis'],
  },
  {
    time: '09/2022 - 04/2024',
    title: 'Algorithm Engineer',
    subtitle: 'Guangdong Create Environmental Technology Co., Ltd.',
    detail:
      'Worked on LLM applications, machine learning monitoring, water-quality warning models using Isolation Forest and LSTM, and computer vision systems based on YOLOv5.',
    tags: ['LLM', 'LangChain', 'LSTM', 'YOLOv5'],
  },
  {
    time: '07/2024 - 09/2026',
    title: 'Master of Computer Science',
    subtitle: 'The University of Sydney',
    detail:
      'Focused on software architecture, distributed systems, cloud computing, advanced programming, and the engineering direction I want to take professionally.',
    tags: ['Architecture', 'Distributed Systems', 'Cloud'],
  },
  {
    time: '08/2025 - 12/2025',
    title: 'Web Developer Internship',
    subtitle: 'BuildLess.online, Sydney',
    detail:
      'Built product features with React, Firebase, Tailwind CSS, Playwright, and Jest, with an emphasis on maintainability, testing, and product iteration.',
    tags: ['React', 'Firebase', 'Testing'],
  },
  {
    time: '07/2025 - Present',
    title: 'Team Lead',
    subtitle: 'Blotz Task mobile App, Sydney',
    detail:
      'Developed an AI-powered productivity app with React Native, .NET Core, and Azure',
    tags: ['React Native', ' .NET Core', 'Azure'],
  },
  {
    time: '09/2025 - Present',
    title: 'Technology Officer',
    subtitle: 'Skill Swap Club, The University of Sydney',
    detail:
      'Leading the development of a skill-sharing platform for Skill Swap Club, built with Spring Boot, React, and Supabase, deployed with Vercel and Render. Managing a small team and iterating based on user/club president feedback.',
    tags: ['Spring Boot', 'React', 'Supabase', 'Vercel', 'Render'],
  },
];
