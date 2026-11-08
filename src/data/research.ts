export type Research = {
  title: string
  venue: string
  year: number
  summary: string
  tools: string[]
  image?: string // e.g. "/research/study1.jpg" (file in public/research)
  doi?: string
  link?: string
  video?: string // e.g. "/videos/study1.mp4" (file in public/videos)
}

export const research: Research[] = [
  {
    title: "Research project title one that can run to a few lines",
    venue: "Journal or conference name",
    year: 2025,
    summary: "One or two sentences about the aim and the main finding.",
    tools: ["EEG", "Eye-tracking"],
    image: "",
    doi: "", // e.g. "10.1016/j.example.2025.01.001"
    link: "",
  },
  {
    title: "Research project title two",
    venue: "Journal or conference name",
    year: 2024,
    summary: "One or two sentences about the aim and the main finding.",
    tools: ["VR", "Biosensors"],
    image: "",
    doi: "",
    link: "",
  },
  {
    title: "Research project title three",
    venue: "Journal or conference name",
    year: 2023,
    summary: "One or two sentences about the aim and the main finding.",
    tools: ["Eye-tracking"],
    image: "",
    doi: "",
    link: "",
  },
]
