import { Mail, Phone } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

export const contactItems = [
    {
        label: "Email",
        value: "johndaryl.simene@gmail.com",
        href: "mailto:johndaryl.simene@gmail.com",
        icon: <Mail className="h-10 w-10" strokeWidth={1.5} />,
    },
    {
        label: "LinkedIn",
        value: "John Daryl Simene",
        href: "https://www.linkedin.com/in/daryl-simene/",
        icon: <FiLinkedin className="h-10 w-10" strokeWidth={1.5} />,
    },
    {
        label: "Phone",
        value: "+639555236270",
        href: "tel:+639555236270",
        icon: <Phone className="h-10 w-10" strokeWidth={1.5} />,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative isolate overflow-hidden bg-[#202020] px-6 py-28 text-text md:px-12 lg:px-24">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-accent">Let’s Design Together !</h2>

                    <div className="mx-auto mt-8 h-px w-44 bg-text-muted/40" />

                    <p className="mx-auto mt-8 max-w-2xl text-lg300 text-text">
                        Let&apos;s work together to bring your next big idea to life.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    {contactItems.map((item) => (
                        <ContactCard key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type ContactCardProps = {
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode | null;
};

export function ContactCard({ label, value, href, icon }: ContactCardProps) {
    return (
        <a
            href={href}
            target={label === "LinkedIn" ? "_blank" : undefined}
            rel={label === "LinkedIn" ? "noreferrer" : undefined}
            className="group relative block overflow-hidden border border-secondary/40 bg-secondary px-8 py-8 text-text shadow-[0_0_32px_rgba(1,63,246,0.22)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/30 hover:bg-secondary/70 hover:shadow-[0_0_38px_rgba(1,63,246,0.38),inset_0_1px_18px_rgba(255,255,255,0.22),inset_0_-10px_24px_rgba(1,63,246,0.22)]"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(1,63,246,0.72)_42%,rgba(1,38,150,0.72)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 text-accent transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(172,236,0,0.85)]">
                {icon}
            </div>
            <h3 className="relative z-10 mt-8 text-2xl text-accent transition-colors duration-500 group-hover:text-white">{label}</h3>

            <p className="relative z-10 mt-2 text-lg300 text-text/90">{value}</p>
        </a>
    );
}
