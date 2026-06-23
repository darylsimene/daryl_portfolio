import { X } from "lucide-react";
import { ContactCard, contactItems } from "../sections/Contact";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/20 px-4 backdrop-blur-md">
            <button type="button" onClick={onClose} className="absolute inset-0 cursor-default" aria-label="Close contact modal" />

            <div className="modal-zoom-open relative z-10 w-full max-w-5xl overflow-hidden border border-white/10 bg-[#202020] px-6 py-14 shadow-[0_0_60px_rgba(1,63,246,0.24)] md:px-12">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-bg/70 text-text backdrop-blur-md transition duration-300 hover:border-accent/50 hover:text-accent"
                    aria-label="Close contact modal"
                >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                </button>

                <div className="relative z-10 text-center">
                    <h2 className="text-accent">Let’s Design Together !</h2>

                    <div className="mx-auto mt-8 h-px w-44 bg-text-muted/40" />

                    <p className="mx-auto mt-8 max-w-2xl text-lg300 text-text">
                        Let&apos;s work together to bring your next big idea to life.
                    </p>
                </div>

                <div className="relative z-10 mt-14 grid gap-8 md:grid-cols-3">
                    {contactItems.map((item) => (
                        <ContactCard key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
