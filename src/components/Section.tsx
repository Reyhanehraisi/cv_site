import type { ReactNode } from "react"
import { Reveal } from "./Reveal"

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
