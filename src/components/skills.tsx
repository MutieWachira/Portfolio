import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" />
            Technical skills
          </p>

          <h2
            id="skills-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Technologies I use to
            <span className="block text-primary">
              bring ideas to life.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            A collection of technologies and tools I have worked with
            across software development, personal projects, and technical
            experiments.
          </p>
        </div>

        {/* Skill categories */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold tracking-wide text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs font-medium text-muted">
                  {group.skills.length} technologies
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-muted">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface-secondary px-3 py-2 text-xs font-medium text-foreground transition-colors group-hover:border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-primary/20 bg-primary/5 p-7 sm:p-9">
          <div aria-hidden="true" className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <h3 className="relative text-lg font-bold text-foreground">
            Always learning, always improving.
          </h3>

          <p className="relative mt-3 max-w-3xl text-sm leading-7 text-muted">
            Technology evolves constantly. I continue exploring new tools,
            strengthening my fundamentals, and applying what I learn
            through practical projects.
          </p>
        </div>
      </div>
    </section>
  );
}