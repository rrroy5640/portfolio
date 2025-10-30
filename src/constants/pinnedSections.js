import projects from "../projects";

// Skill sections with associated projects
export const pinnedSections = [
  {
    skill: "AI Application Development",
    skillTitle: "AI Application Development",
    description:
      "Building intelligent applications that leverage AI and machine learning to solve complex problems and enhance user experiences.",
    projectId: 1, // Travel Craft
    features: [
      "API Integration (OpenAI, Mapbox, etc.)",
      "Prototyping and Iteration",
      "Full Stack Development",
    ],
  },
  {
    skill: "In-house Application Development",
    skillTitle: "In-house Application Development",
    description:
      "Developing custom internal tools and systems tailored to specific business needs and workflows.",
    projectId: 4, // OM CRM
    features: [
      "Custom Business Logic",
      "Database Design & Optimization",
      "Secure Authentication",
      "Workflow Automation",
    ],
  },
  {
    skill: "Enterprise Portal Design & Development",
    skillTitle: "Enterprise Portal Design & Development",
    description:
      "Creating professional, scalable enterprise portals with modern design principles and robust architecture.",
    projectId: 3, // OZ Design
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Accessibility Compliance",
      "Brand Identity",
    ],
  },
  {
    skill: "Low Code Platform Development",
    skillTitle: "Low Code Platform Development",
    description:
      "Leveraging low-code platforms and modern frameworks to rapidly build and deploy professional websites.",
    projectId: 2, // OM Lending
    features: [
      "Rapid Development",
      "SEO Optimization",
      "Multi-site Management",
    ],
  },
];

// Helper function to get project by ID
export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
