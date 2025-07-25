export interface Event {
  id: string;
  title: string;
  description: string;
  organizer: string;
  date: string;
  deadline: string;
  location: string;
  type: "competition" | "hackathon" | "workshop" | "internship" | "job";
  tags: string[];
  prize: string;
  participants: number;
  maxParticipants: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  featured: boolean;
  category: string;
  registrationLink: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "AI Innovation Challenge 2024",
    description: "Build innovative AI solutions to solve real-world problems. Win prizes worth $50,000 and get mentorship from industry experts.",
    organizer: "TechCorp",
    date: "2024-03-15",
    deadline: "2024-02-28",
    location: "San Francisco, CA",
    type: "competition",
    tags: ["AI", "Machine Learning", "Innovation", "Technology"],
    prize: "$50,000",
    participants: 1247,
    maxParticipants: 2000,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
    featured: true,
    category: "Technology",
    registrationLink: "#"
  },
  {
    id: "2",
    title: "Frontend Developer Internship",
    description: "3-month paid internship working on cutting-edge web applications. Learn from senior developers and contribute to real projects.",
    organizer: "StartupXYZ",
    date: "2024-04-01",
    deadline: "2024-03-10",
    location: "Remote",
    type: "internship",
    tags: ["React", "TypeScript", "Frontend", "Remote"],
    prize: "$3,000/month",
    participants: 234,
    maxParticipants: 50,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    featured: false,
    category: "Internship",
    registrationLink: "#"
  },
  {
    id: "3",
    title: "Design Thinking Workshop",
    description: "Learn design thinking methodology from Google designers. Hands-on workshop with real case studies and practical exercises.",
    organizer: "Design Academy",
    date: "2024-02-20",
    deadline: "2024-02-15",
    location: "New York, NY",
    type: "workshop",
    tags: ["Design", "UX", "Workshop", "Google"],
    prize: "Certificate",
    participants: 89,
    maxParticipants: 100,
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    featured: false,
    category: "Design",
    registrationLink: "#"
  },
  {
    id: "4",
    title: "Blockchain Developer",
    description: "Full-time position building decentralized applications. Work with cutting-edge blockchain technology and DeFi protocols.",
    organizer: "CryptoStart",
    date: "2024-02-01",
    deadline: "2024-01-25",
    location: "Austin, TX",
    type: "job",
    tags: ["Blockchain", "Solidity", "DeFi", "Web3"],
    prize: "$120k - $180k",
    participants: 45,
    maxParticipants: 1,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    featured: true,
    category: "Job",
    registrationLink: "#"
  },
  {
    id: "5",
    title: "24-Hour Hackathon",
    description: "Code for 24 hours straight to build amazing projects. Food, drinks, and prizes provided. Network with fellow developers.",
    organizer: "Dev Community",
    date: "2024-03-05",
    deadline: "2024-02-25",
    location: "Seattle, WA",
    type: "hackathon",
    tags: ["Hackathon", "JavaScript", "Python", "24-hour"],
    prize: "$10,000",
    participants: 567,
    maxParticipants: 800,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    featured: true,
    category: "Hackathon",
    registrationLink: "#"
  },
  {
    id: "6",
    title: "Data Science Bootcamp",
    description: "12-week intensive bootcamp covering Python, machine learning, and data visualization. Job placement assistance included.",
    organizer: "DataLearn",
    date: "2024-04-15",
    deadline: "2024-03-20",
    location: "Chicago, IL",
    type: "workshop",
    tags: ["Data Science", "Python", "ML", "Bootcamp"],
    prize: "Job Placement",
    participants: 156,
    maxParticipants: 200,
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    featured: false,
    category: "Education",
    registrationLink: "#"
  },
  {
    id: "7",
    title: "Mobile App Design Contest",
    description: "Design the next big mobile app. Judged by top designers from Apple, Google, and Figma. Winner gets $25,000 and mentorship.",
    organizer: "Design Council",
    date: "2024-03-30",
    deadline: "2024-03-15",
    location: "Los Angeles, CA",
    type: "competition",
    tags: ["Mobile", "Design", "UI/UX", "App"],
    prize: "$25,000",
    participants: 345,
    maxParticipants: 500,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    featured: false,
    category: "Design",
    registrationLink: "#"
  },
  {
    id: "8",
    title: "Cloud Engineer Position",
    description: "Join our cloud infrastructure team. Work with AWS, Azure, and GCP. Competitive salary and excellent benefits.",
    organizer: "CloudTech",
    date: "2024-02-10",
    deadline: "2024-02-05",
    location: "Denver, CO",
    type: "job",
    tags: ["Cloud", "AWS", "DevOps", "Infrastructure"],
    prize: "$100k - $140k",
    participants: 78,
    maxParticipants: 1,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    featured: false,
    category: "Job",
    registrationLink: "#"
  },
  {
    id: "9",
    title: "Startup Pitch Competition",
    description: "Pitch your startup idea to investors and industry experts. Win funding, mentorship, and accelerator program admission.",
    organizer: "Venture Capital",
    date: "2024-04-10",
    deadline: "2024-03-25",
    location: "Boston, MA",
    type: "competition",
    tags: ["Startup", "Pitch", "Investment", "Entrepreneurship"],
    prize: "$100,000 funding",
    participants: 89,
    maxParticipants: 150,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    featured: true,
    category: "Business",
    registrationLink: "#"
  },
  {
    id: "10",
    title: "Cybersecurity Workshop",
    description: "Learn ethical hacking and cybersecurity fundamentals. Hands-on labs with real-world scenarios and industry certifications.",
    organizer: "SecureLearn",
    date: "2024-03-12",
    deadline: "2024-03-01",
    location: "Washington, DC",
    type: "workshop",
    tags: ["Cybersecurity", "Ethical Hacking", "Security", "Certification"],
    prize: "Industry Certification",
    participants: 123,
    maxParticipants: 80,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    featured: false,
    category: "Security",
    registrationLink: "#"
  }
];

export const eventCategories = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Education",
  "Security",
  "Data Science",
  "Mobile",
  "Cloud",
  "AI/ML"
];

export const eventTypes = [
  "All Types",
  "competition",
  "hackathon", 
  "workshop",
  "internship",
  "job"
];

export const difficultyLevels = [
  "All Levels",
  "Beginner",
  "Intermediate", 
  "Advanced"
];