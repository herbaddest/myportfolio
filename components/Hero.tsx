import { site, stats } from "@/config/site";
import { Scene } from "./Scene";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Scene />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span className="hero__dot" aria-hidden="true" />
            {site.role} · {site.location}
          </p>
          <h1 id="hero-title" className="hero__name">
            {site.name}
            <span className="hero__name-accent">.</span>
          </h1>
          <p className="hero__intro">{site.intro}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--solid">
              See the work
            </a>
            <a href="#contact" className="btn btn--line">
              Start a project
            </a>
          </div>
        </div>

        <div className="hero__side">
          <div className="terminal" aria-hidden="true">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--r" />
              <span className="terminal__dot terminal__dot--y" />
              <span className="terminal__dot terminal__dot--g" />
              <span className="terminal__title">~/wanjiku</span>
            </div>
            <pre className="terminal__body">
{`$ whoami
wanjiku — full-stack dev
$ cat stack.txt
next.js · react · typescript
supabase · postgresql
m-pesa · paystack
$ status
${site.availability.toLowerCase()}`}
            </pre>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </li>
            ))}
          </ul>

          <p className="hero__status">{site.availability}</p>
        </div>
      </div>
    </section>
  );
}