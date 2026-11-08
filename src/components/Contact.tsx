import { profile } from "../data/site"
import { Reveal } from "./Reveal"
import { Section } from "./Section"

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact">
      <Reveal className="flex flex-wrap gap-4">
        {profile.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-panel px-6 py-3 font-medium transition hover:bg-accent hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </Reveal>
      <p className="mt-20 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </Section>
  )
}
