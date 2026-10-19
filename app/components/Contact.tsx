
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: "",
    icon: MapPin,
  },
];

export default function Contact() {
  const emailSubject = encodeURIComponent("Project Inquiry");

  const emailBody = encodeURIComponent(
    "Hello,\n\nI would like to discuss a project with you.\n\nThank you."
  );

  const emailHref = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappNumber = personalInfo.whatsapp.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#392747] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          {/* Background Decorations */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9A5CC7]/30 blur-3xl" />

          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#B47AE5]/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#DCC9F4]">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Have a project in mind?
                <span className="text-[#DCC9F4]">
                  {" "}Let&apos;s talk.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-white/70">
                I am open to discussing projects, learning opportunities,
                and collaborations. Feel free to reach out.
              </p>

              {/* Send Email Button */}
              <a
                href={emailHref}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#392747] transition hover:-translate-y-1 hover:bg-[#FBE4ED]"
              >
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5"
                  >
                    <div className="rounded-xl bg-white/10 p-3 text-[#DCC9F4]">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-white/60">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all font-semibold hover:text-[#DCC9F4]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-semibold">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp Button */}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#FBE4ED] px-5 py-4 font-bold text-[#392747] transition hover:-translate-y-1 hover:bg-white"
                >
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
