import Image from "next/image";
import { site, techStack, experience } from "@/config/site";
import { getChannels } from "@/lib/contact";

export function About() {
  const github = getChannels().find((c) => c.key === "github");
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__head">
          <h2 id="about-title" className="h2">
            About
          </h2>
          {site.portrait ? (
            <div className="about__portrait">
              <Image src={site.portrait} alt={`Portrait of ${site.name}`} fill sizes="(max-width: 900px) 60vw, 24vw" />
            </div>
          ) : null}

          <div className="about__meta">
            <div className="about__meta-row">
              <span className="about__meta-label">Based in</span>
              <span>{site.location}</span>
            </div>
            <div className="about__meta-row">
              <span className="about__meta-label">Focus</span>
              <span>Web apps, payments, dashboards</span>
            </div>
            <div className="about__meta-row">
              <span className="about__meta-label">Status</span>
              <span>{site.availability}</span>
            </div>
            {github ? (
              <a href={github.href} target="_blank" rel="noopener noreferrer" className="about__github">
                {github.label} {github.handle}
              </a>
            ) : null}
          </div>
        </div>

        <div className="about__body">
          <p className="lede">
            I&apos;m a developer in {site.location} who builds web apps from the first sketch to the deployed product,
            on my own, so there&apos;s one person to talk to and nobody to hand things off to.
          </p>
          <div className="prose">
            <p>
              Most of what I&apos;ve shipped involves money: wallets, memberships, payments through M-Pesa and cards,
              and the admin panels that keep them honest. That means I spend a lot of time on the parts nobody sees,
              like permissions, ledgers that add up, and payments that never get counted twice.
            </p>
            <p>
              I work mostly in Next.js and Supabase, and reach for FastAPI or Node when a project needs a backend of
              its own.
            </p>
          </div>

          <dl className="tools">
            {techStack.map((g) => (
              <div key={g.group} className="tools__row">
                <dt>{g.group}</dt>
                <dd className="chip-row">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div className="experience">
            <h3 className="experience__title">Experience</h3>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.period} className="timeline__item">
                  <div className="timeline__head">
                    <span className="timeline__period">{e.period}</span>
                    <h4 className="timeline__role">{e.role}</h4>
                    <span className="timeline__org">{e.org}</span>
                  </div>
                  <p className="timeline__desc">{e.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}