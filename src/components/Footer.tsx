import Logo from "../assets/logo-text.png";

const Footer = () => {
  const linkGroups = [
    {
      title: "Product",
      links: [
        { name: "Home", href: "#" },
        { name: "Technologies", href: "#technologies" },
        { name: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/efrathshihab/dev-stack-react" },
    { name: "Twitter", href: "https://twitter.com/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1216px] px-5 pb-8 pt-12 md:pb-10 md:pt-16 xl:px-0">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand and Social Links */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a
              href="#"
              aria-label="Dev Stack home"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
            >
              <img src={Logo} alt="Dev Stack" className="h-7 w-auto object-contain" />
            </a>

            <p className="mt-3 max-w-[380px] text-[13px] leading-5 text-[#64748B]">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <nav aria-label="Social links" className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-[12px] font-medium text-[#334155] transition-colors hover:text-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Product, Company, and Legal Links */}
          {linkGroups.map((group) => {
            return (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-[12px] font-semibold uppercase tracking-wide text-[#0F172A]">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => {
                    return (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="rounded-sm text-[12px] leading-5 text-[#64748B] transition-colors hover:text-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>
        
        {/* Copyright and Bottom Links */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-[12px] leading-5 text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>

          <nav aria-label="Privacy and terms" className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#privacy"
              className="rounded-sm transition-colors hover:text-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="rounded-sm transition-colors hover:text-pink-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
