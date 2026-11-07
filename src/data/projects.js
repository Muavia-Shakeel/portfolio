// One source of truth for /projects, /projects/[slug], the home teaser and the sitemap.
// Every number below comes from the previous portfolio copy or the experience section;
// projects 4–6 are self-directed prototypes, so `metrics` lists design facts, not benchmarks.
export const projects = [
  {
    id: 1,
    slug: 'ktml-whatsapp-erp-bot',
    kind: 'production',
    title: 'KTML WhatsApp ERP Bot',
    metaTitle: 'WhatsApp ERP Bot: Gemini Agent for Oracle',
    summary:
      'Production WhatsApp agent for a textile ERP. English and Urdu messages become Oracle yarn pre-bookings via a 13-tool Gemini loop.',
    problem:
      'Staff needed to create, confirm, post and report on yarn pre-bookings in a textile ERP backed by Oracle DB, in plain English or Urdu, from WhatsApp. The first version was a 1,500-line regex state machine.',
    approach:
      'v2 replaced the state machine with a Gemini function-calling loop and 13 tools, cutting code by about 60% while adding capabilities. Security is layered: HMAC-SHA256 webhook authentication, role-based access for 3 roles, parameterized queries on all writes, SELECT-only analytics behind a DDL/DML blocklist, and rate limiting.',
    metrics: [
      '13 tools in the function-calling loop',
      '~60% less code than the 1,500-line regex state machine it replaced',
      '3 RBAC roles enforced on every request',
      'English and Urdu natural-language input',
    ],
    tech: ['Python', 'Flask', 'Gemini', 'Oracle DB', 'Node.js', 'rapidfuzz', 'HMAC-SHA256'],
    link: 'https://github.com/muavia-shakeel',
  },
  {
    id: 2,
    slug: 'visual-ai-video-analytics',
    kind: 'production',
    title: 'Visual-AI: Enterprise CV & Video Analytics',
    metaTitle: 'Visual-AI: Real-Time CV with DeepStream',
    summary:
      'GPU video analytics on NVIDIA DeepStream 7.1: people and vehicle counting, speed detection, face recognition and ANPR from live RTSP feeds.',
    problem:
      'Live RTSP camera feeds needed real-time analytics (people and vehicle counting, vehicle speed, face recognition and number-plate reading) on shared GPU infrastructure, with cameras added or removed without restarting the pipeline.',
    approach:
      'Parallel deep-learning pipelines on NVIDIA DeepStream 7.1 with YOLOv8s on TensorRT FP16. Counting uses virtual tripwires, speed uses a 4-point perspective transform, faces are matched with ArcFace against a FAISS employee index, and ANPR uses consensus voting. Camera streams are managed dynamically from Oracle DB. A watchdog with exponential backoff recovers frozen streams and sends email alerts on critical failures.',
    metrics: [
      '12+ camera feeds processed on GPU infrastructure across the ANPR and monitoring systems',
      'TensorRT FP16 inference on DeepStream 7.1',
      'Cameras added or removed at runtime with no pipeline restart',
    ],
    tech: ['DeepStream 7.1', 'YOLOv8s', 'TensorRT FP16', 'FAISS', 'ArcFace', 'Oracle DB', 'GStreamer', 'Python'],
    link: 'https://github.com/muavia-shakeel',
  },
  {
    id: 3,
    slug: 'ide-pass-id-card-scanner',
    kind: 'production',
    title: 'IDE-PASS SDK: AI ID Card Scanner',
    metaTitle: 'IDE-PASS: AI OCR for Pakistani ID Cards',
    summary:
      'Document-processing pipeline for Pakistani CNIC, driving licence and passport: YOLOv8 classification, multi-engine OCR and Urdu transliteration.',
    problem:
      'Pakistani identity documents (CNIC, Driving License, Passport) had to be captured from a hardware scanner and turned into structured, bilingual data without manual typing.',
    approach:
      'Cards are captured via a hardware SDK, classified by a custom YOLOv8 model, and routed through a multi-engine OCR stack: Google Cloud Vision for accuracy with EasyOCR as fallback. The pipeline auto-detects document type, extracts structured fields, and transliterates Urdu names to English via a Groq LLM. It ships as a Windows .exe built with PyInstaller, using a dual-process design (32-bit capture, 64-bit AI) over REST.',
    metrics: [
      '96% accuracy on 100+ CNICs processed daily (hybrid OCR engine)',
      '3 document types detected automatically',
      'Distributed as a single Windows .exe',
    ],
    tech: ['YOLOv8', 'Google Cloud Vision', 'EasyOCR', 'Groq LLM', 'Flask', 'Oracle DB', 'PyInstaller', 'Docker'],
    link: 'https://github.com/muavia-shakeel',
  },
  {
    id: 4,
    slug: 'enterprise-rag-knowledge-assistant',
    kind: 'self-directed',
    title: 'Enterprise RAG Knowledge Assistant',
    metaTitle: 'RAG Assistant with Document Access Control',
    summary:
      'Self-directed RAG chat assistant over a private document set, with per-document access control applied before retrieval.',
    problem:
      'A retrieval-augmented assistant over private documents must not leak chunks a user is not authorized to see, and answers should be traceable to their source.',
    approach:
      'Dense retrieval over a FAISS index, with LLM answers grounded in retrieved passages and inline citations. A role-based filter is applied before retrieval rather than after generation, so unauthorized text never reaches the model.',
    metrics: [
      'Access filter runs before retrieval, not after generation',
      'Inline citations on grounded answers',
      'Self-directed prototype: retrieval benchmarks not yet published',
    ],
    tech: ['LangChain', 'FAISS', 'Gemini', 'FastAPI', 'Python'],
  },
  {
    id: 5,
    slug: 'multi-agent-research-workflow',
    kind: 'self-directed',
    title: 'Multi-Agent Research & Automation Workflow',
    metaTitle: 'Multi-Agent LLM Research Workflow',
    summary:
      'Self-directed multi-agent workflow: planner, researcher and writer agents coordinate through a shared task queue to produce a structured summary.',
    problem:
      'Multi-step research tasks fail in interesting ways when one agent stalls or returns low-confidence output. This project explores agent handoff and recovery.',
    approach:
      'A small team of LLM agents (planner, web/document researcher, writer) coordinates through a shared task queue to turn a research question into a structured summary, with tool-use loops and failure recovery when an agent stalls.',
    metrics: [
      '3 cooperating agent roles on a shared task queue',
      'Recovery path for stalled or low-confidence agents',
      'Self-directed prototype: no production metrics',
    ],
    tech: ['LangChain', 'Gemini', 'Python', 'Function Calling'],
  },
  {
    id: 6,
    slug: 'voice-to-action-service-desk',
    kind: 'self-directed',
    title: 'Voice-to-Action Service Desk',
    metaTitle: 'Voice-to-Action Agent: Whisper + Gemini',
    summary:
      'Self-directed voice agent: Whisper transcription, LLM intent extraction, then a real backend action such as logging a ticket.',
    problem:
      'Voice assistants usually return text. A service desk needs the spoken request turned into an action, such as logging a ticket or checking its status.',
    approach:
      'Whisper transcribes the spoken request, a Gemini LLM classifies intent and extracts structured fields, and a FastAPI backend dispatches the matching action instead of just returning text.',
    metrics: [
      'Speech to intent to action, end to end',
      'Structured field extraction before dispatch',
      'Self-directed prototype: no production metrics',
    ],
    tech: ['Whisper', 'Gemini', 'FastAPI', 'Python'],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
