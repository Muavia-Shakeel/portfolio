export const skills = [
  {
    category: 'Deep Learning',
    icon: 'brain',
    note: 'Building and optimizing neural networks for production',
    items: ['PyTorch', 'TensorFlow', 'TensorRT', 'ONNX', 'Hugging Face'],
  },
  {
    category: 'Computer Vision',
    icon: 'eye',
    note: 'Real-time visual intelligence at scale',
    items: ['OpenCV', 'YOLOv8', 'DeepStream', 'CUDA', 'MediaPipe'],
  },
  {
    category: 'Languages',
    icon: 'code',
    note: 'From scripting to systems programming',
    items: ['Python', 'PL/SQL', 'JavaScript', 'C++', 'Bash'],
  },
  {
    category: 'MLOps & Infra',
    icon: 'server',
    note: 'End-to-end deployment pipelines',
    items: ['Docker', 'FastAPI', 'Git', 'Linux', 'NVIDIA GPU', 'Triton'],
  },
  {
    category: 'Data & ERP',
    icon: 'database',
    note: 'Enterprise data integration',
    items: ['Oracle DB', 'PostgreSQL', 'REST APIs', 'Oracle ERP', 'Redis'],
  },
  {
    category: 'Research',
    icon: 'flask',
    note: 'Pushing boundaries in document AI',
    items: ['Transformers', 'LayoutLM', 'GANs', 'Attention Mechanisms', 'CRNN'],
  },
  {
    category: 'Web Development',
    icon: 'globe',
    note: 'Building interfaces and APIs',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Data Science',
    icon: 'chart',
    note: 'Data wrangling, analysis, and visualization',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    category: 'Cloud & Tools',
    icon: 'cloud',
    note: 'Cloud platforms and developer productivity',
    items: ['AWS Basics', 'Google Colab', 'HuggingFace Hub', 'GitHub Actions', 'Notion'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'AI/ML Engineer',
    company: 'Kohinoor Textile Mills Limited Company',
    period: '2025 – Present',
    type: 'work',
    bullets: [
      'Leading development of 5+ computer vision systems across production, logistics, and quality control',
      'Deployed real-time ANPR and monitoring systems processing 12+ camera feeds on GPU infrastructure',
      'Built hybrid OCR engine handling 100+ CNICs daily with 96% accuracy',
      'Integrated AI decision modules with Oracle ERP, automating manual processes end-to-end',
    ],
  },
  {
    id: 2,
    role: 'MS Artificial Intelligence',
    company: 'FAST-NU',
    period: '2025 – Present',
    type: 'education',
    bullets: [
      'Graduate research in deep learning and intelligent document processing',
      'Coursework: Advanced ML, NLP, Statistical Learning, Computer Vision',
      'Research focus: Attention mechanisms for industrial OCR applications',
      'CGPA: In Progress',
    ],
  },
  {
    id: 3,
    role: 'Machine Learning Engineer (Remote)',
    company: 'Hazara University',
    period: '2023 – 2024',
    type: 'work',
    bullets: [
      'Developed and optimized ML models for anomaly detection, predictive analysis, and classification — 95%+ accuracy',
      'Automated data preprocessing pipelines, reducing processing time by 50%',
      'Implemented real-time anomaly detection using Isolation Forests (silhouette coefficient: 0.86)',
      'Worked on Generative AI systems (GPT, LLaMA, RAG) for document retrieval and chatbot development',
    ],
  },
  {
    id: 4,
    role: 'Python Developer Intern',
    company: 'Kohinoor Textile Mills',
    period: '2023',
    type: 'work',
    bullets: [
      'Built Python automation scripts for production data analysis, improving efficiency by 30%',
      'Integrated SQL databases for real-time inventory tracking and reporting',
      'Assisted in backend development with Flask & FastAPI to create RESTful APIs',
      'Built a data analytics dashboard to visualize operational trends and insights',
    ],
  },
  {
    id: 5,
    role: 'Bachelor\'s in Artificial Intelligence',
    company: 'Hazara University',
    period: '2020 – 2024',
    type: 'education',
    bullets: [
      'CGPA: 3.07 / 4.00',
      'Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Database Systems, Software Engineering',
      'Final Year Project: AI-based malware detection system achieving 90% accuracy with 20% fewer false positives',
    ],
  },
]

export const researchAreas = [
  {
    id: 1,
    icon: 'eye',
    title: 'Computer Vision',
    description:
      'Object detection, defect localization, and visual inspection systems for industrial environments. Focus on real-time inference under production constraints with YOLO variants and transformer-based detectors.',
    tags: ['Object Detection', 'YOLO', 'RT-DETR', 'Defect Inspection'],
  },
  {
    id: 2,
    icon: 'rag',
    title: 'Agentic AI',
    description:
      'Designing autonomous multi-step AI systems that use tools, memory, and planning to complete complex tasks. Exploring function-calling loops, tool-use orchestration, and agentic architectures for enterprise automation.',
    tags: ['LLM Agents', 'Tool Use', 'Function Calling', 'Gemini', 'LangChain'],
  },
  {
    id: 3,
    icon: 'rag',
    title: 'Retrieval-Augmented Generation',
    description:
      'Grounding LLMs with external knowledge sources for enterprise Q\u0026A, document retrieval, and ERP query systems. Exploring hybrid dense-sparse retrieval and re-ranking strategies.',
    tags: ['RAG', 'FAISS', 'LangChain', 'Vector Search', 'LLMs'],
  },
  {
    id: 4,
    icon: 'xai',
    title: 'Explainable AI (XAI)',
    description:
      'Making black-box models interpretable for industrial stakeholders. Applying SHAP, LIME, and Grad-CAM to explain predictions in defect detection and anomaly classification systems.',
    tags: ['SHAP', 'LIME', 'Grad-CAM', 'Model Interpretability'],
  },
  {
    id: 5,
    icon: 'rl',
    title: 'Reinforcement Learning',
    description:
      'Exploring policy-based optimization for sequential decision problems in manufacturing — adaptive inspection routing, resource scheduling, and closed-loop quality control feedback.',
    tags: ['RL', 'Policy Optimization', 'Decision Systems', 'Automation'],
  },
  {
    id: 6,
    icon: 'integration',
    title: 'AI-ERP Integration',
    description:
      'Embedding low-latency ML inference into enterprise resource planning workflows. Architectures for real-time AI decision support within Oracle EBS transaction flows.',
    tags: ['Oracle EBS', 'Real-time AI', 'ERP Automation', 'PL/SQL'],
  },
]

export const publications = [
  {
    id: 1,
    slug: 'federated-gradcam-chest-xray',
    title: 'Federated Learning with Dataset-Size-Weighted GradCAM Aggregation for Explainable Multi-Label Chest X-Ray Diagnosis',
    authors: 'Muavia Shakeel, Muhammad Haseeb',
    venue: 'ICAISF 2026',
    // Fill in once the paper has a public page: they feed the ScholarlyArticle JSON-LD (url/sameAs) when set.
    url: null, // e.g. IEEE Xplore link
    doi: null,
    abstract:
      'A federated learning framework for explainable multi-label chest X-ray diagnosis on NIH ChestX-ray14, introducing a privacy-preserving, dataset-size-weighted GradCAM aggregation scheme (M* = Σ (n_k/N) M_k). Achieves AUC-ROC of 0.8235 — within 0.6% of centralized training — while the weighted aggregation yields higher explanation faithfulness than uniform or max-pool baselines. A multi-seed stress test across four non-IID heterogeneity levels reveals a previously unreported decoupling between classification performance (maximized near-IID) and explanation stability (maximized at moderate heterogeneity, α ≈ 0.3).',
    tags: ['Federated Learning', 'GradCAM', 'Explainable AI', 'Medical Imaging', 'Non-IID'],
  },
]

// Populated manually after reviewing Formspree submissions from the feedback form (#feedback).
export const testimonials = [
  {
    id: 1,
    name: 'Anand Mishra',
    role: 'Project Manager',
    company: 'AK INFOTECH',
    country: 'India',
    quote:
      'It was a pleasure working with Muavia Shakeel on this project. He demonstrated professionalism, good communication, and a collaborative approach throughout. The project was completed successfully, and I appreciate his dedication and timely contributions. I look forward to working together again in the future.',
    photo: null,
  },
]

// Blog stays noindex and out of the sitemap while this is empty (thin-content guard).
export const posts = []
// { slug, title, description, date: 'YYYY-MM-DD', body }
