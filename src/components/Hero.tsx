import { useRef, useState } from "react"
import { motion, useScroll, useTransform, type Variants } from "motion/react"
import { profile, tools } from "../data/site"
import { research } from "../data/research"

const line: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: "easeOut" },
  }),
}

export default function Hero() {
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])

  const cardWidth = () =>
    (track.current?.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300

  const scrollByCard = (dir: number) =>
    track.current?.scrollBy({ left: dir * cardWidth(), behavior: "smooth" })

  const onScroll = () => {
    if (track.current) setActive(Math.round(track.current.scrollLeft / cardWidth()))
  }

  return (
    <section id="top">
      {/* Hero image band */}
      <div className="relative overflow-hidden bg-[#0b2f3a] pb-52 pt-32">
        <motion.div
          aria-hidden
          className="absolute inset-x-0 -top-40 bottom-0 bg-cover bg-center"
          style={{ y: bgY, backgroundImage: "url('/hero.jpg')" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
          animate={{ x: [0, 90, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2f3a]/90 via-[#0b2f3a]/60 to-[#0b2f3a]/20" />

        <div className="relative mx-auto max-w-6xl px-6">
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-7xl">
            {profile.headline.map((t, i) => (
              <span key={t} className="block overflow-hidden pb-1">
                <motion.span className="block" variants={line} custom={i} initial="hidden" animate="show">
                  {t}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block text-[#7cc7d9]"
                variants={line}
                custom={profile.headline.length}
                initial="hidden"
                animate="show"
              >
                {profile.name}
              </motion.span>
            </span>
          </h1>
          <motion.p
            className="mt-4 max-w-xl text-white/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            {profile.title}
          </motion.p>
        </div>
      </div>

      {/* Featured cards overlapping the hero */}
      <div className="relative z-10 mx-auto -mt-44 max-w-6xl px-6">
        <div
          ref={track}
          onScroll={onScroll}
          className="no-scrollbar -mx-3 flex snap-x snap-mandatory overflow-x-auto"
        >
          {research.map((p, i) => (
            <motion.a
              key={p.title}
              href="#research"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}
              whileHover={{ y: -8 }}
              className="block shrink-0 basis-full snap-start px-3 md:basis-1/3"
            >
              <div className="h-44 bg-white p-5">
                <p className="text-xs font-medium text-accent">{p.venue}</p>
                <h3 className="mt-2 line-clamp-4 font-display text-lg font-medium leading-snug">
                  {p.title}
                </h3>
              </div>
              <div className="h-52 overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-accent to-[#0b2f3a]" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            {[-1, 1].map((d) => (
              <button
                key={d}
                aria-label={d < 0 ? "Previous" : "Next"}
                onClick={() => scrollByCard(d)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-accent transition hover:bg-accent hover:text-white"
              >
                {d < 0 ? "←" : "→"}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {research.map((p, i) => (
              <span
                key={p.title}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-accent" : "w-1.5 bg-accent/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tools marquee */}
      <div className="mx-auto mt-20 max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-500">Tools I work with</p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 gap-16 pr-16">
                {[...tools, ...tools, ...tools].map((t, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap font-display text-lg font-bold text-ink/80"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
