"use client";

interface WhatsAppButtonProps {
    /** Telefon numarası uluslararası formatta, örn: '905xxxxxxxxx' */
    phone: string;
    /** Otomatik mesaj metni */
    message?: string;
}

export default function WhatsAppButton({ phone, message = '' }: WhatsAppButtonProps) {
    const encoded = encodeURIComponent(message);
    const href = `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-105 transform transition"
            aria-label="WhatsApp ile iletişime geç"
        >
            {/* WhatsApp icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 0C5.373 0 0 5.373 0 12a11.94 11.94 0 002.054 6.558L0 24l5.538-2.036A11.936 11.936 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.5 18.5c-1.234 0-2.445-.339-3.501-.98l-.25-.145-3.285 1.208 1.208-3.285-.145-.25a8.487 8.487 0 01-.98-3.501c0-4.694 3.813-8.507 8.507-8.507S20.5 7.806 20.5 12.5 16.694 20.5 12.5 20.5z" />
            </svg>
        </a>
    );
}