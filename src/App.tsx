import { motion } from "motion/react"

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white grid place-items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        My portfolio is under construction
      </motion.h1>
    </main>
  )
}