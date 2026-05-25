export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/phosgene67',
      icon: '/assets/icons/github.svg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sami-chowdhury',
      icon: '/assets/icons/linkedin.svg'
    },
    {
      name: 'Email',
      url: 'mailto:samfibo06@gmail.com',
      icon: '/assets/icons/email.svg'
    }
  ]

  return (
    <footer className="bg-neutral-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Sami Chowdhury</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Robotics Engineer & EEE Student. Building intelligent systems through embedded systems, robotics, and AI automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-neutral-400 hover:text-primary-400 text-sm smooth-transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links with Icons */}
          <div>
            <h4 className="font-semibold text-base mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 smooth-transition"
                  aria-label={social.name}
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-neutral-400 text-sm text-center">
            &copy; {currentYear} Sami Chowdhury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
