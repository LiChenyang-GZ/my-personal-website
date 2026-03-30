export const aboutSkills = [
  {
    label: 'Full Stack',
    title: 'End-to-End Product Engineering',
    description:
      'Building complete applications from idea to production.',
    subDescription: [
      'Frontend–backend integration and system flow',
      'Feature design aligned with real user workflows',
      'Web and mobile application delivery',
    ],
    accent: '#8b5cf6',
  },
  {
    label: 'Frontend',
    title: 'Frontend & Interaction',
    description:
      'Designing clean and responsive user interfaces.',
    subDescription: [
      'Component-based UI with React and TypeScript',
      'Interaction design, animation, and smooth user experience',
      'State management and UI architecture',
    ],
    accent: '#ff7a59',
  },
  {
    label: 'Backend',
    title: 'Backend & System Design',
    description:
      'Designing scalable backend systems and APIs.',
    subDescription: [
      'API design and business logic implementation',
      'Database schema design and data consistency',
      'Authentication and backend architecture',
    ],
    accent: '#14b8a6',
  },
  {
    label: 'Distributed',
    title: 'Distributed Systems',
    description:
      'Handling service communication and system reliability.',
    subDescription: [
      'Distributed transactions (Saga, Outbox)',
      'Event-driven architecture and message queues',
      'Failure handling and retry mechanisms',
    ],
    accent: '#f43f5e',
  },
  {
    label: 'Cloud',
    title: 'Cloud-Native Systems',
    description:
      'Building scalable systems on cloud infrastructure.',
    subDescription: [
      'Auto-scaling and load-balanced architectures',
      'Serverless workflows',
      'Deployment and production environment setup',
    ],
    accent: '#f59e0b',
  },
  {
    label: 'AI',
    title: 'AI System Integration',
    description:
      'Applying AI to real-world software systems.',
    subDescription: [
      'RAG pipelines and knowledge base design',
      'Prompt design and hallucination control',
      'LLM integration into production workflows',
    ],
    accent: '#ec4899',
  }
];

export const introMessages = [
  'Full-stack engineer focused on scalable systems and real-world products.',
  'AI application developer focused on practical systems.',
  'Interested in clean interfaces, cloud workflows, and product-minded engineering.',
];

export const tickerSkills = [
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Spring Boot',
  'Java',
  'Python',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Azure',
  'Docker',
  'Firebase',
  'Supabase',
  'Tailwind CSS',
  'Playwright',
  'Jest',
  'LangChain',
];

export const projects = [
  {
    title: 'Blotz Task',
    period: '07/2025 - Present',
    status: 'In Progress',
    focus: 'Full-Stack Product Engineering',
    summary:
      'An AI task planning app that turns messy thoughts into clear, actionable steps, with real-time guidance and a calm, focus-first workflow.',
    tech: ['React Native', 'TypeScript', 'Tailwind CSS', '.NET Core', 'SQL Server', 'Azure'],
    link: 'https://github.com/LiChenyang-GZ',
    accent: 'from-[#ffede7] to-[#fff8f2]',
    media: {
      type: 'product_mockup',
      url: '/images/blotz-ui.png',
    },
    cards: [
      {
        title: 'Task Breakdown & Productivity Flow',
        description:
          'Turns fuzzy ideas into step-by-step plans and keeps the next action visible so users can move forward without overwhelm.',
      },
      {
        title: 'Interactive Calendar & Task System',
        description:
          'Drag, schedule, and nest tasks to see time, dependencies, and daily load at a glance.',
      },
      {
        title: 'AI Planning Copilot',
        description:
          'Chat with an AI copilot to refine tasks, generate subtasks, and keep plans updated in real time.',
      },
      {
        title: 'Gacha Reward Drops',
        description:
          'When users feel stuck, a gacha machine drops a random, low-effort task to restore momentum.',
      },
    ],
  },
  {
    title: 'AWS Image Processing Platform',
    period: '05/2025',
    status: 'Finished',
    focus: 'Cloud Architecture & Scalability',
    summary:
      'A cloud-native system for scalable image processing, combining auto-scaling infrastructure with event-driven serverless workflows.',
    tech: ['AWS', 'EC2', 'Lambda', 'SNS', 'S3', 'Aurora MySQL'],
    accent: 'from-[#e8f7f3] to-[#f8fffd]',
    cards: [
      {
        title: 'Dynamic Resource Scaling',
        description:
          'Auto Scaling Groups and an Application Load Balancer keep the app stable under unpredictable traffic spikes.',
        media: {
          url: '/images/aws-web-architecture.png',
          alt: 'Web application architecture',
        },
      },
      {
        title: 'Asynchronous Event Workflow',
        description:
          'An async pipeline with Lambda and SNS keeps processing non-blocking and responsive at scale.',
        media: {
          url: '/images/aws-serverless-architecture.png',
          alt: 'Serverless architecture',
        },
      },
    ],
  },
  {
    title: 'Distributed E-commerce Platform',
    period: '10/2025',
    status: 'Finished',
    focus: 'Distributed Systems & Reliability',
    summary:
      'A microservices-based online store integrating payments, delivery, email, and warehouse inventory with a focus on availability, reliability, and eventual consistency.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Saga', 'Microservices'],
    link: 'https://github.com/LiChenyang-GZ',
    accent: 'from-[#efe8ff] to-[#fbf8ff]',
    cards: [
      {
        title: 'Distributed Transaction Reliability',
        description:
          'Orders stay consistent across payment, inventory, and delivery with Saga compensation and Outbox-backed events.',
      },
      {
        title: 'Resilient Messaging Pipeline',
        description:
          'Durable queues, persistent messages, and dead-letter retries keep notifications reliable under failure.',
      },
      {
        title: 'Graceful Degradation Under Failure',
        description:
          'Optimistic locking and bounded retries prevent cascading failures while preserving availability.',
      },
    ],
  },
  {
    title: 'AI Onboarding Assistant',
    period: '2023',
    status: 'AI Application',
    focus: 'AI Systems & RAG Pipelines',
    summary:
      'An internal onboarding chatbot that answers HR/IT questions from company handbooks and guides new hires through first-week workflows.',
    tech: ['LangChain', 'ChatGLM3', 'Gradio', 'RAG'],
    link: 'https://lichenyang-gz.github.io/my-personal-website/',
    accent: 'from-[#ffeef7] to-[#fff9fc]',
    media: null,
    cards: [
      {
        title: 'Document-Grounded Answers',
        description:
          'Answers stay aligned with internal policies by grounding responses in handbook and policy content.',
      },
      {
        title: 'Policy-Safe Responses',
        description:
          'Strict source constraints keep replies within verified documents and reduce policy hallucinations.',
      },
      {
        title: 'Guided Onboarding Tasks',
        description:
          'Step-by-step guidance turns questions into action, covering HR, IT access, and first-week setup.',
      },
    ],
  },
];

export const timelineItems = [
  {
    time: '09/2018 - 06/2022',
    title: 'Bachelor of Business Administration',
    subtitle: 'Beijing Normal - Hong Kong Baptist University',
    detail:
      'Built the foundation in information systems, database management, algorithm design, and big data applications, graduating with Second Class Division I honors.',
    tags: ['Business', 'Information Systems', 'Database', 'Algorithms'],
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
    time: '01/2022 - 06/2022',
    title: 'Data Analysis Intern',
    subtitle: 'Shanghai MarcPoint Technology Co., Ltd.',
    detail:
      'Analysed user behaviour and brand perception on social media, developing data-driven insights to support business and marketing decisions. Built analytical workflows to identify high-risk user patterns and evaluate brand reputation using metrics such as audience size, engagement, and loyalty.',
    tags: ['Data Analysis', 'Python', 'PostgreSQL', 'Tableau'],
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
