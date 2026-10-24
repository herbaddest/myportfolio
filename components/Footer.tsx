import { navItems, site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name}
        </p>
        <nav aria-label="Footer">
          <ul className="footer__list">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="link">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="link">
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
