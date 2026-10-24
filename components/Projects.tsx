import Image from "next/image";
import { projects, type Project } from "@/config/site";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  completed: "Completed",
  "in-progress": "In progress",
};

function host(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function Facts({ project }: { project: Project }) {
  return (
    <dl className="facts">
      <div className="facts__row">
        <dt>Status</dt>
        <dd>
          <span className={`pill pill--status pill--${project.status}`}>{statusLabel[project.status]}</span>
        </dd>
      </div>
      <div className="facts__row">
        <dt>Built with</dt>
        <dd className="pill-row">
          {project.tech.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </dd>
      </div>
    </dl>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;
  return (
    <p className="work__links">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link">
          Visit {host(project.liveUrl)}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="link">
          Source code
          <span className="sr-only"> for {project.name} (opens in a new tab)</span>
        </a>
      ) : null}
    </p>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.image);
  const rest = projects.filter((p) => !p.image);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="h2">
          Recent work
        </h2>

        <ol className="works">
          {featured.map((p, i) => (
            <li key={p.slug} className={`work ${i % 2 === 1 ? "work--flip" : ""}`}>
              <div className="work__media">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shot"
                    aria-label={`${p.name}: open the live site (opens in a new tab)`}
                  >
                    <Image
                      src={p.image as string}
                      alt={`Screenshot of the ${p.name} home page`}
                      fill
                      sizes="(max-width: 900px) 100vw, 62vw"
                      className="shot__img"
                      priority={i === 0}
                    />
                  </a>
                ) : (
                  <div className="shot">
                    <Image
                      src={p.image as string}
                      alt={`Screenshot of ${p.name}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 62vw"
                      className="shot__img"
                    />
                  </div>
                )}
              </div>
              <article className="work__text" aria-labelledby={`project-${p.slug}`}>
                <h3 id={`project-${p.slug}`} className="h3">
                  {p.name}
                </h3>
                {p.tagline ? <p className="work__tagline">{p.tagline}</p> : null}
                <p className="work__desc">{p.description}</p>
                <Facts project={p} />
                <Links project={p} />
              </article>
            </li>
          ))}
        </ol>

        {rest.length ? (
          <div className="more">
            <h3 className="more__title">More projects</h3>
            <ul className="more__list">
              {rest.map((p) => (
                <li key={p.slug} className="more__item">
                  <article aria-labelledby={`project-${p.slug}`} className="more__article">
                    <h4 id={`project-${p.slug}`} className="more__name">
                      {p.name}
                    </h4>
                    <div className="more__body">
                      {p.tagline ? <p className="more__tagline">{p.tagline}</p> : null}
                      <p className="more__desc">{p.description}</p>
                      <Links project={p} />
                    </div>
                    <p className="more__meta">
                      {statusLabel[p.status]}
                      <span className="more__stack">
                        {p.tech.map((t) => (
                          <span key={t} className="pill pill--sm">
                            {t}
                          </span>
                        ))}
                      </span>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
