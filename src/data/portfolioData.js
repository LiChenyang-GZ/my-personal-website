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
    link: 'https://github.com/sol-wizard/Blotz-Task-App',
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
    designCards: [
      {
        title: 'Managing Complex UI Interactions',
        problem: 'Complex interactions across calendar views, subtasks, and gestures can easily become inconsistent.',
        solution: 'Designed a unified interaction system supporting scheduling, nested subtasks, and gesture-based actions.',
        tradeoff: 'Increased initial boilerplate for state management, but drastically reduced UI bugs in edge cases.',
        icon: "Network"
      },
      {
        title: 'Synchronizing UI State and Data',
        problem: 'Keeping UI state consistent with backend data becomes difficult in dynamic, offline-capable interfaces.',
        solution: 'Implemented structured state management to keep user actions and application state synchronized across device and cloud.',
        tradeoff: 'Optimistic UI updates improve perceived performance, requiring robust rollback logic if backend sync fails.',
        icon: "Layers"
      },
      {
        title: 'Scaling Feature Logic',
        problem: 'Embedding logic in the frontend limits flexibility and scalability, especially for dynamic features like rewards.',
        solution: 'Designed backend-driven reward and evaluation systems to support extensible feature development without app updates.',
        tradeoff: 'Requires constant API connectivity for dynamic features, mitigated by caching standard rules locally.',
        icon: "Workflow"
      }
    ],
  },
  {
    title: 'Skill Swap Platform',
    period: '09/2025 - Present',
    status: 'In Progress',
    focus: 'Full-Stack System Design',
    summary:
      'A platform for managing student workshops with moderation workflows, safer concurrent editing, and real-time notifications for campus communities.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Supabase'],
    link: 'https://github.com/LiChenyang-GZ/SkillSwap-Web',
    accent: 'from-[#eaf7ff] to-[#f7fbff]',
    cards: [
      {
        title: 'Explore & Attend Workshops',
        description:
          'Browse upcoming skill-sharing events across campus, filter by interest area, and register in one step.',
      },
      {
        title: 'Submit & Host Workshops',
        description:
          'Any users can propose a workshop. Submissions enter a moderation queue and go live only after admin approval, keeping content quality high.',
      },
      {
        title: 'Memory Page',
        description: 'A dedicated space with embedded Markdown editors preserving past workshops for ongoing knowledge retention and engagement.',
      },
      {
        title: 'Smart Notifications',
        description:
          'Users are notified when their workshop is approved, when event details change, or when a session they joined has updates.',
      },
    ],
    designCards: [
      {
        title: 'Role-Based Access Control & Moderation',
        icon: 'Shield',
        problem:
          'Unrestricted workshop submissions can lead to spam and inconsistent content quality.',
        solution:
          'Built a state-driven workflow (Draft -> Pending -> Approved) with RBAC, ensuring only reviewed content goes live.',
        tradeoff:
          'Adds friction to the publishing process, but significantly improves community trust and content quality.',
      },
      {
        title: 'Optimistic Locking for Concurrent Editing',
        icon: 'Lock',
        problem:
          'Multiple admins editing Markdown pages can cause silent overwrites and inconsistent content states.',
        solution:
          'Used version-based optimistic locking to detect stale updates and reject conflicting writes instead of allowing silent overwrites.',
        tradeoff:
          'Conflicts require user retry, but consistency is preserved without blocking collaborators.',
      },
      {
        title: 'Event-Driven Notification System',
        icon: 'Bell',
        problem:
          'Tying notification logic directly to the core request-response flow increases latency and system coupling.',
        solution:
          'Introduced event-driven notifications for approvals, registrations, and workflow updates to improve responsiveness.',
        tradeoff:
          'Adds infrastructure complexity, but keeps communication logic decoupled from the core workflow.',
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
          url: 'Web Application Architecture.png',
          alt: 'Web application architecture',
        },
      },
      {
        title: 'Asynchronous Event Workflow',
        description:
          'An async pipeline with Lambda and SNS keeps processing non-blocking and responsive at scale.',
        media: {
          url: 'Serverless Architecture.png',
          alt: 'Serverless architecture',
        },
      },
    ],
    designCards: [
      {
        title: 'Scaling Under Variable Load',
        problem: 'Handling unpredictable upload traffic requires dynamic scaling of compute resources.',
        solution: 'Used Auto Scaling Groups and an Application Load Balancer to automatically spin up/down EC2 instances based on load.',
        tradeoff: 'Slight delay during scale-out (cold starts), but drastically reduces idle server costs.',
        icon: "TrendingUp"
      },
      {
        title: 'Async Processing Pipeline',
        icon: 'Workflow',
        problem:
          'Synchronous image processing ties up web servers and degrades user-facing response times.',
        solution:
          'Decoupled upload from processing: S3 uploads trigger SNS events, which invoke Lambda functions to process images asynchronously.',
        tradeoff:
          'Users receive a processing-started response rather than a completed result, requiring polling or push notification for status — a reasonable trade for throughput.',
      },
      {
        title: 'Service Boundary Separation',
        icon: 'Unlink',
        problem:
          'Bundling storage, compute, and notification in a single service creates tight coupling and a single point of failure.',
        solution:
          'Separated responsibilities across S3 (storage), Lambda (processing), and SNS (notification), each independently replaceable.',
        tradeoff:
          'More moving parts to configure and monitor, but each component scales and fails independently.',
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
    link: 'https://github.com/LiChenyang-GZ/microservices-ecommerce-platform',
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
    designCards: [
      {
        title: 'Saga Pattern for Distributed Transactions',
        icon: 'GitMerge',
        problem:
          'A single order spans multiple services — payment, inventory, delivery. A failure in any step can leave data inconsistent across the system.',
        solution:
          'Implemented the Saga choreography pattern: each service publishes domain events and listens for compensating events to roll back on failure.',
        tradeoff:
          'Eventual consistency means a brief window where state is intermediate — acceptable for e-commerce, where strict two-phase commit would introduce unacceptable latency and coupling.',
      },
      {
        title: 'Transactional Outbox Pattern',
        icon: 'Inbox',
        problem:
          'Writing to the database and publishing a message to RabbitMQ are two separate operations — a crash between them causes silent data loss.',
        solution:
          'Used the Outbox pattern: events are written to a database table in the same transaction as the business operation, then a relay process publishes them to the queue.',
        tradeoff:
          'Adds a relay process and an extra table, but completely eliminates the dual-write problem without distributed transactions.',
      },
      {
        title: 'Dead-Letter Queue & Retry Strategy',
        icon: 'RefreshCw',
        problem:
          'Messages that fail processing can block queues or be silently dropped, causing invisible data loss.',
        solution:
          'Configured manual acknowledgment with bounded retries. After exhausting retries, messages route to a dead-letter queue for inspection and replay.',
        tradeoff:
          'DLQ messages require manual review, but this is far preferable to silent loss — and provides observability into failure patterns.',
      },
      {
        title: 'Service Decomposition Boundaries',
        icon: 'LayoutGrid',
        problem:
          'Poorly defined service boundaries lead to chatty inter-service calls and high coupling under change.',
        solution:
          'Decomposed by business capability — order, payment, inventory, notification — each owning its data and communicating only through events.',
        tradeoff:
          'Distributed data means no joins across services; queries that span domains require aggregation at the application layer or dedicated read models.',
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
    designCards: [
      {
        title: 'Document Chunking Strategy',
        icon: 'Scissors',
        problem:
          'Large policy documents fed whole into retrieval return overly broad chunks that dilute relevance and confuse the model.',
        solution:
          'Split documents into small, semantically coherent sections around logical boundaries (headings, numbered steps), so retrieved chunks map closely to specific questions.',
        tradeoff:
          'Fine-grained chunks improve precision but increase index size and can lose context that spans sections — mitigated by including surrounding metadata in each chunk.',
      },
      {
        title: 'Grounding & Hallucination Control',
        icon: 'Anchor',
        problem:
          'LLMs will answer confidently even when retrieved context is insufficient, producing plausible but incorrect policy guidance.',
        solution:
          'Enforced a prompt constraint requiring the model to explicitly refuse or flag when retrieved context does not contain enough information to answer.',
        tradeoff:
          'Increases "I don\'t know" responses, which feels less capable — but for HR and IT policy, a conservative non-answer is safer than a confident wrong one.',
      },
      {
        title: 'Retrieval Pipeline Design',
        icon: 'Search',
        problem:
          'Simple keyword retrieval misses semantically similar but differently worded questions common in onboarding queries.',
        solution:
          'Used dense vector embeddings for retrieval, matching questions to relevant document chunks by meaning rather than exact wording.',
        tradeoff:
          'Embedding-based retrieval is slower and requires an embedding model in the pipeline, but retrieval quality is substantially better for natural language questions.',
      },
      {
        title: 'End-to-End System Integration',
        icon: 'FileText',
        problem:
          'A standalone language model is not enough — users need a complete system they can interact with, not just a model endpoint.',
        solution:
          'Assembled the full pipeline: document ingestion, vector indexing, retrieval, prompt construction, and a Gradio UI, integrated via LangChain orchestration.',
        tradeoff:
          'More components to maintain, but each layer is independently replaceable — swapping the base model or document source does not require redesigning the whole system.',
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
