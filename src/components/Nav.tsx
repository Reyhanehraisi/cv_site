import { motion } from "motion/react"
import { profile } from "../data/site"

const links = [
  ["About", "#about"],
  ["Tools", "#tools"],
  ["Research", "#research"],
  ["Designs", "#designs"],
  ["Contact", "#contact"],
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[#06121c]/80 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-sm text-white">
            {profile.name[0]}
          </span>
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-sm text-slate-400 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
