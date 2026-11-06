import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" />
            Experience & education
          </p>

          <h2
            id="experience-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            My professional
            <span className="block text-primary">
              journey so far.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            My experience combines practical technical support,
            academic learning, and continuous development through
            software projects.
          </p>
        </div>

        <div className="relative mt-14 space-y-7 before:absolute before:bottom-8 before:left-[11px] before:top-8 before:w-px before:bg-border md:ml-4">
          {experiences.map((experience) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className="relative pl-10 sm:pl-14"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary"
              />

              <div className="rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/40 sm:p-9">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      {experience.type}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-muted">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-border bg-surface-secondary px-4 py-2 text-xs font-semibold text-muted">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted">
                  {experience.description}
                </p>

                <div className="mt-7">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key responsibilities and learning
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {experience.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-border bg-surface-secondary px-3 py-2 text-xs font-medium text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}