import { contact } from "@/config/site";
import { emailHref, getChannels, whatsappHref } from "@/lib/contact";

export function Contact() {
  const others = getChannels().filter((c) => c.key !== "email" && c.key !== "whatsapp");

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact">
        <h2 id="contact-title" className="contact__title">
          Tell me what you&apos;re building.
        </h2>

        <div className="contact__body">
          <p className="contact__text">
            Send a few lines on what it should do and when you need it. Clients and hiring teams are both welcome.
          </p>

          {contact.email ? (
            <a href={emailHref()} className="contact__email">
              {contact.email}
            </a>
          ) : null}

          <div className="contact__actions">
            {contact.whatsapp ? (
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
                Message on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>

          {others.length ? (
            <ul className="elsewhere" aria-label="Other places to find me">
              {others.map((c) => (
                <li key={c.key}>
                  <a href={c.href} className="link" {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {c.label}
                    {c.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
