import { motion } from "motion/react"
import { Section } from "./Section"

// Put images in public/designs and set image: "/designs/name.jpg"
const designs = [
  { title: "Design title 1", caption: "Short caption", image: "" },
  { title: "Design title 2", caption: "Short caption", image: "" },
  { title: "Design title 3", caption: "Short caption", image: "" },
]

export default function Designs() {
  return (
    <Section id="designs" eyebrow="Visual work" title="Designs">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {designs.map((d, i) => (
          <motion.figure
            key={d.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-sm border border-line bg-panel"
          >
            {d.image ? (
              <img src={d.image} alt={d.title} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-accent/30 to-accent-soft" />
            )}
            <figcaption className="p-4">
              <p className="font-display font-bold">{d.title}</p>
              <p className="text-sm text-slate-400">{d.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}
