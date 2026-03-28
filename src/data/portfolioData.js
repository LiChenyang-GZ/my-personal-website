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
      'A task management app for ADHD people, designed around smooth UI behavior and AI-assisted task breakdown to help users move step by step toward completion.',
    tech: ['React Native', 'TypeScript', 'Tailwind CSS', '.NET Core', 'C#', 'SQL Server', 'Azure'],
    link: 'https://github.com/LiChenyang-GZ',
    accent: 'from-[#ffede7] to-[#fff8f2]',
    cards: [
      {
        title: 'Managing Complex UI Interactions',
        problem:
          'Complex interactions across calendar views, subtasks, and gestures can easily become inconsistent.',
        solution:
          'Designed a unified interaction system supporting scheduling, nested subtasks, and gesture-based actions.',
      },
      {
        title: 'Synchronizing UI State and Data',
        problem:
          'Keeping UI state consistent with backend data becomes difficult in dynamic interfaces.',
        solution:
          'Implemented structured state management to keep user actions and application state synchronized.',
      },
      {
        title: 'Scaling Feature Logic',
        problem:
          'Embedding logic in the frontend limits flexibility and scalability.',
        solution:
          'Designed backend-driven reward and evaluation systems to support extensible feature development.',
      },
    ],
  },
  {
    title: 'Distributed E-commerce Platform',
    period: '10/2025',
    status: 'Finished',
    focus: 'Distributed Systems & Reliability',
    summary:
      'A microservices-based e-commerce system designed to handle distributed transactions, service decoupling, and fault tolerance in a scalable architecture.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Saga', 'Microservices'],
    link: 'https://github.com/LiChenyang-GZ',
    accent: 'from-[#efe8ff] to-[#fbf8ff]',
    cards: [
      {
        title: 'Handling Distributed Transaction Consistency',
        problem:
          'Ensuring data consistency across multiple services is difficult when failures occur mid-process.',
        solution:
          'Implemented Saga pattern with an Outbox mechanism to guarantee eventual consistency and reliable message delivery.',
      },
      {
        title: 'Ensuring Reliable Message Processing',
        problem:
          'Message queues can result in data loss or duplication under failure scenarios.',
        solution:
          'Designed retry logic, manual acknowledgment, and dead-letter queues to ensure reliable event handling.',
      },
      {
        title: 'Reducing Service Coupling',
        problem:
          'Tightly coupled services limit scalability and increase failure impact.',
        solution:
          'Adopted an event-driven architecture using RabbitMQ to decouple services and improve system resilience.',
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
    tech: ['AWS', 'EC2', 'Lambda', 'SNS', 'S3', 'Aurora MySQL', 'Flask'],
    accent: 'from-[#e8f7f3] to-[#f8fffd]',
    cards: [
      {
        title: 'Scaling Under Variable Load',
        problem:
          'Handling unpredictable traffic requires dynamic scaling of resources.',
        solution:
          'Used Auto Scaling Groups and an Application Load Balancer to maintain performance and availability.',
      },
      {
        title: 'Avoiding Blocking Processing',
        problem:
          'Synchronous workflows reduce system responsiveness and scalability.',
        solution:
          'Designed an asynchronous pipeline using Lambda and SNS to process tasks efficiently.',
      },
      {
        title: 'Decoupling Cloud Services',
        problem:
          'Tightly connected services reduce flexibility and increase failure propagation.',
        solution:
          'Separated storage, processing, and notification using S3, Lambda, and SNS.',
      },
    ],
  },
  {
    title: 'AI Onboarding Assistant',
    period: '2023',
    status: 'AI Application',
    focus: 'AI Systems & RAG Pipelines',
    summary:
      'An AI-powered assistant built with retrieval-augmented generation to automate document-based question answering and reduce repetitive support tasks.',
    tech: ['LangChain', 'ChatGLM3', 'Gradio', 'RAG'],
    link: 'https://lichenyang-gz.github.io/my-personal-website/',
    accent: 'from-[#ffeef7] to-[#fff9fc]',
    cards: [
      {
        title: 'Designing Effective Knowledge Retrieval',
        problem:
          'Retrieval quality can degrade when knowledge base documents are poorly structured or overly aggregated.',
        solution:
          'Improved retrieval effectiveness by restructuring documents into smaller, semantically coherent chunks so relevant context is prioritized.',
      },
      {
        title: 'Controlling LLM Hallucination',
        problem:
          'LLMs may generate confident but incorrect answers when information is missing or ambiguous.',
        solution:
          'Designed prompt strategies to enforce fallback behavior and reduce hallucinated responses.',
      },
      {
        title: 'Handling Knowledge Conflicts & Priority',
        problem:
          'Overlapping or conflicting information across documents can reduce answer accuracy.',
        solution:
          'Adjusted document granularity and structure to improve relevance scoring and information prioritization.',
      },
      {
        title: 'Building End-to-End AI Integration',
        problem:
          'AI systems require more than model access to be usable in real scenarios.',
        solution:
          'Integrated knowledge base, plugin orchestration, and API-based querying to build a complete, usable assistant system.',
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
