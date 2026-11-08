import { profile } from "../data/site"
import { Reveal } from "./Reveal"
import { Section } from "./Section"

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About me">
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-400">{profile.about}</p>
      </Reveal>
    </Section>
  )
}
