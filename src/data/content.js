export const projects = [
  {
    id: 1,
    title: 'Hybrid OCR Engine',
    description:
      'Production OCR pipeline combining YOLOv8-based text region detection with a custom CRNN recognition model. Processes 500+ noisy industrial documents daily — gate passes, delivery challans, weight slips — with 96% accuracy on low-contrast thermal prints.',
    tech: ['YOLOv8', 'PyTorch', 'OpenCV', 'Python', 'FastAPI'],
    link: '#',
  },
  {
    id: 2,
    title: 'Real-Time ANPR System',
    description:
      'GPU-accelerated Automatic Number Plate Recognition processing 4 camera streams simultaneously at 30 FPS. Built on NVIDIA DeepStream with TensorRT-optimized detection and recognition models. Integrated with Oracle ERP for automated vehicle logging and gate management.',
    tech: ['DeepStream', 'TensorRT', 'CUDA', 'Python', 'Oracle DB'],
    link: '#',
  },
  {
    id: 3,
    title: 'AI-Powered Visual Monitoring',
    description:
      'Intelligent factory monitoring system with real-time object detection, zone intrusion alerts, and anomaly flagging. Processes 8+ camera feeds on a single NVIDIA GPU with <100ms latency. Automated alert system via WhatsApp and email.',
    tech: ['YOLOv8', 'OpenCV', 'FastAPI', 'PostgreSQL', 'WebSockets'],
    link: '#',
  },
  {
    id: 4,
    title: 'Oracle ERP AI Integration',
    description:
      'Custom middleware layer connecting AI inference engines with Oracle E-Business Suite. Automates inventory classification, demand forecasting inputs, and quality control decisions directly within ERP transactions using PL/SQL stored procedures and Python REST APIs.',
    tech: ['Python', 'PL/SQL', 'Oracle DB', 'REST APIs', 'Docker'],
    link: '#',
  },
  {
    id: 5,
    title: 'Textile Defect Detection',
    description:
      'CNN-based visual inspection system deployed on production lines, detecting fabric defects (holes, stains, weaving faults) in real-time. Reduced manual inspection overhead by 80% and improved defect catch rate to 94%. Trained on 15,000+ annotated defect images.',
    tech: ['PyTorch', 'CNN', 'OpenCV', 'TensorRT', 'ONNX'],
    link: '#',
  },
  {
    id: 6,
    title: 'Intelligent Document Processor',
    description:
      'Layout-aware document AI system using LayoutLMv3 for extracting structured data from unstructured industrial documents. Handles invoices, purchase orders, and compliance forms with field-level extraction accuracy of 92%.',
    tech: ['LayoutLMv3', 'Transformers', 'FastAPI', 'Docker', 'PostgreSQL'],
    link: '#',
  },
]

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
]

export const experience = [
  {
    id: 1,
    role: 'AI/ML Engineer',
    company: 'Kohinoor Textile Mills',
    period: '2023 – Present',
    type: 'work',
    bullets: [
      'Leading development of 5+ computer vision systems across production, logistics, and quality control',
      'Deployed real-time ANPR and monitoring systems processing 12+ camera feeds on GPU infrastructure',
      'Built hybrid OCR engine handling 500+ documents daily with 96% accuracy',
      'Integrated AI decision modules with Oracle ERP, automating manual processes end-to-end',
    ],
  },
  {
    id: 2,
    role: 'MS Artificial Intelligence',
    company: 'FAST-NU',
    period: '2024 – Present',
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
    role: 'AI/ML Intern',
    company: 'Kohinoor Textile Mills',
    period: '2022 – 2023',
    type: 'work',
    bullets: [
      'Developed initial prototypes for OCR and object detection systems',
      'Established the AI/ML pipeline architecture still in production today',
      'First exposure to deploying models on NVIDIA GPU-accelerated hardware',
      'Built data collection and annotation workflows for industrial datasets',
    ],
  },
]

export const research = [
  {
    id: 1,
    title: 'Hybrid Attention Mechanisms for Industrial OCR',
    description:
      'Exploring spatial and channel attention architectures to improve OCR accuracy on degraded industrial document scans. Combines domain-specific pre-training with attention-guided region focusing.',
    status: 'In Progress',
    statusColor: 'yellow',
  },
  {
    id: 2,
    title: 'Real-Time Defect Detection in Textile Manufacturing using YOLO Variants',
    description:
      'Comparative evaluation of YOLOv5, YOLOv8, and RT-DETR for automated fabric inspection under real production constraints including variable lighting, speed, and defect types.',
    status: 'Under Review',
    statusColor: 'orange',
  },
  {
    id: 3,
    title: 'ERP-Integrated AI Decision Systems: A Framework',
    description:
      'Proposes an architecture for embedding low-latency ML inference into enterprise resource planning transaction flows. Validated on Oracle EBS with inventory and QC automation use cases.',
    status: 'Published',
    statusColor: 'green',
  },
]
