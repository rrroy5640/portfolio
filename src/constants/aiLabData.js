// AI Lab Section Content & Configuration

export const aiLabContent = {
  title: "Engineering Intelligence",
  subtitle:
    "Designing AI systems that scale with clarity, reliability, and purpose.",

  pipeline: {
    title: "LLM Pipeline Flow",
    description: "End-to-end request processing with structured data handling",
    nodes: [
      { id: "user", label: "User Input", color: "#3B82F6" },
      { id: "preprocess", label: "Preprocess", color: "#06B6D4" },
      { id: "queue", label: "Queue", color: "#8B5CF6" },
      { id: "model", label: "LLM", color: "#F59E0B" },
      { id: "postprocess", label: "Post-process", color: "#10B981" },
      { id: "output", label: "Output", color: "#3B82F6" },
    ],
  },

  codeSnippets: [
    {
      id: "schema-definition",
      title: "Define the Contract",
      subtitle:
        "Type-safe schemas ensure predictable outputs from unpredictable models",
      language: "typescript",
      code: `const ResumeSchema = z.object({
  personal: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
  }),
  experience: z.array(z.object({
    company: z.string(),
    role: z.string(),
    duration: z.string(),
    achievements: z.array(z.string()),
  })),
  skills: z.array(z.string()),
  education: z.array(z.object({
    institution: z.string(),
    degree: z.string(),
    year: z.number(),
  })),
});

type Resume = z.infer<typeof ResumeSchema>;`,
    },
    {
      id: "llm-execution",
      title: "Execute with Validation",
      subtitle:
        "Transform unstructured text into validated, type-safe data structures",
      language: "typescript",
      code: `const result = await llm.generate({
  schema: ResumeSchema,
  prompt: buildPrompt(input),
  temperature: 0.3,
  maxTokens: 2000,
});

// Validate & normalize
const validated = validateSchema(
  result.data,
  ResumeSchema
);

return {
  success: true,
  data: validated,
  tokens: result.usage.totalTokens,
  latency: result.timing.duration,
};`,
    },
  ],

  // For future phases
  logExamples: [
    { level: "info", service: "Lambda", message: "request accepted", time: 0 },
    { level: "info", service: "Queue", message: "job dispatched", time: 42 },
    { level: "info", service: "Worker", message: "running", time: 85 },
    {
      level: "success",
      service: "LLM",
      message: "1.3s • 1580 tokens",
      time: 1385,
    },
    { level: "success", service: "Storage", message: "saved", time: 1420 },
    { level: "success", service: "API", message: "200 OK", time: 1450 },
  ],

  promptExample: {
    system:
      "You are a data extraction specialist. Output valid JSON matching the provided schema.",
    developer:
      "If extraction fails, return { error: 'insufficient_data', retry: true }",
    assistant: "I will extract and normalize data according to the schema.",
  },

  cloudArchitecture: {
    title: "Distributed Architecture",
    description: "Async processing with fault tolerance and scalability",
    nodes: [
      {
        id: "client",
        label: "Client",
        description: "User request",
        icon: "Client",
        color: "#3B82F6",
        position: { x: 0, y: 0 },
      },
      {
        id: "api",
        label: "API Gateway",
        description: "Request validation",
        icon: "API",
        color: "#06B6D4",
        position: { x: 1, y: 0 },
      },
      {
        id: "lambda",
        label: "Lambda",
        description: "Serverless handler",
        icon: "Lambda",
        color: "#8B5CF6",
        position: { x: 2, y: 0 },
      },
      {
        id: "queue",
        label: "SQS",
        description: "Message queue",
        icon: "Queue",
        color: "#F59E0B",
        position: { x: 3, y: 0 },
      },
      {
        id: "worker",
        label: "Worker",
        description: "Async processor",
        icon: "Worker",
        color: "#10B981",
        position: { x: 4, y: 0 },
      },
      {
        id: "llm",
        label: "LLM",
        description: "AI processing",
        icon: "LLM",
        color: "#EC4899",
        position: { x: 5, y: 0 },
      },
      {
        id: "storage",
        label: "Storage",
        description: "S3 / Database",
        icon: "Storage",
        color: "#14B8A6",
        position: { x: 4, y: 1 },
      },
      {
        id: "response",
        label: "Response",
        description: "Result delivery",
        icon: "Response",
        color: "#3B82F6",
        position: { x: 2, y: 1 },
      },
    ],
    connections: [
      { from: "client", to: "api" },
      { from: "api", to: "lambda" },
      { from: "lambda", to: "queue" },
      { from: "queue", to: "worker" },
      { from: "worker", to: "llm" },
      { from: "llm", to: "worker" },
      { from: "worker", to: "storage" },
      { from: "storage", to: "response" },
      { from: "response", to: "client" },
    ],
  },
};

export const animationConfig = {
  pipeline: {
    stagger: 0.15,
    duration: 0.6,
    pulseDelay: 1.2,
    pulseDuration: 2,
  },
  code: {
    delay: 0.3,
    duration: 0.8,
  },
  terminal: {
    typingSpeed: 50, // ms per character
    lineDelay: 200, // ms between lines
  },
  prompt: {
    stagger: 0.2,
    duration: 0.6,
  },
  cloud: {
    stagger: 0.12,
    duration: 0.5,
    flowDelay: 1.2,
    flowDuration: 2.5,
  },
};
