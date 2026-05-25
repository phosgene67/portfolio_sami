import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import ContactForm from '../forms/ContactForm'
import { personData } from '../../data/person'

export default function ContactSection() {
  const contactLinks = [
    {
      icon: '/assets/icons/email.svg',
      label: 'Email',
      value: personData.email,
      href: `mailto:${personData.email}`
    },
    {
      icon: '/assets/icons/linkedin.svg',
      label: 'LinkedIn',
      value: 'Sami Chowdhury',
      href: personData.linkedin
    },
    {
      icon: '/assets/icons/github.svg',
      label: 'GitHub',
      value: 'phosgene67',
      href: personData.github
    }
  ]

  return (
    <Section id="contact" className="bg-white">
      <SectionTitle>Get In Touch</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
          </p>

          <div className="space-y-6">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 hover:bg-primary-50 smooth-transition group"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-8 h-8 filter brightness-0 invert group-hover:brightness-0 group-hover:invert"
                />
                <div>
                  <p className="text-sm text-neutral-500 font-semibold">
                    {link.label}
                  </p>
                  <p className="text-neutral-900 font-semibold group-hover:text-primary-600 smooth-transition">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-50 p-8 md:p-10 rounded-lg border border-neutral-200">
          <h3 className="text-2xl font-bold font-poppins text-neutral-900 mb-6">
            Send Me a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
