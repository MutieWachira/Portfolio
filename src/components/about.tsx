import { profile } from "@/data/profile";

const highlights = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building web applications with modern frontend and backend technologies.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Turning practical challenges into reliable, maintainable software solutions.",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Exploring machine learning concepts and developing experiments to understand how AI systems work.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border bg-surface-secondary/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" />
            About me
          </p>

          <h2
            id="about-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Technology is more than code.
            <span className="block text-primary">
              It&apos;s about solving problems.
            </span>
          </h2>
        </div>

        {/* Introduction */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              My academic background is in {profile.education.qualification}
              from {profile.education.institution}. I enjoy building practical
              digital solutions that make everyday tasks easier and more efficient.
            </p>

            <p>
              My work focuses on full-stack web development, using modern
              technologies to build applications with functional interfaces,
              reliable backends, and structured data management.
            </p>

            <p>
              I also have hands-on IT support experience, helping users
              troubleshoot software, hardware, and connectivity issues.
              This has strengthened my ability to understand problems from
              the user&apos;s perspective.
            </p>

            <p>
              Beyond application development, I&apos;m exploring artificial
              intelligence and machine learning, with a particular interest
              in understanding how models are built and trained.
            </p>
          </div>

          {/* Professional summary card */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-7 shadow-sm sm:p-9">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-primary">
              My approach
            </p>

            <h3 className="relative mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Build with purpose. Learn continuously.
            </h3>

            <p className="relative mt-5 leading-7 text-muted">
              I believe good software should be useful, secure,
              maintainable, and easy to understand. I approach development
              by breaking complex problems into smaller steps, testing
              solutions, and improving them over time.
            </p>

            <div className="relative mt-8 border-t border-border pt-7">
              <p className="text-sm font-semibold text-foreground">
                What matters in my work
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Clean code",
                  "Security",
                  "Performance",
                  "Maintainability",
                  "Continuous learning",
                ].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-border bg-surface-secondary px-4 py-2 text-xs font-medium text-muted"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Areas of focus */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-px w-7 bg-primary" />
              What I focus on
            </p>

            <h3             className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Areas I enjoy working in
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="text-sm font-bold text-primary">
                  {item.number}
                </span>

                <h4 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}