import { motion } from "motion/react"
import { research } from "../data/research"
import { Section } from "./Section"

export default function Research() {
  return (
    <Section id="research" eyebrow="Publications & projects" title="Research">
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="flex flex-col overflow-hidden rounded-sm border border-line bg-panel"
          >
            {p.video && (
              <video src={p.video} autoPlay muted loop playsInline className="aspect-video w-full object-cover" />
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-slate-500">
                {p.venue} · {p.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
                {p.doi && (
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    DOI
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    Read online
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
