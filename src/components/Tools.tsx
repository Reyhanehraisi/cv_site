import { motion } from "motion/react"
import { tools } from "../data/site"
import { Section } from "./Section"

export default function Tools() {
  return (
    <Section id="tools" eyebrow="Toolkit" title="Neurotechnology tools">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-line bg-white p-6 shadow-sm"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-accent">{t.group}</span>
            <h3 className="mt-2 font-display text-xl font-bold">{t.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
