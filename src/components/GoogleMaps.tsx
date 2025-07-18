'use client';

interface GoogleMapProps {
    query: string;
    heightClass?: string;
}

export default function GoogleMap({
    query,
    heightClass = 'h-56',
}: GoogleMapProps) {
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(
        query
    )}&output=embed`;

    return (
        <div className={`w-full ${heightClass} overflow-hidden rounded-xl shadow-md`}>
            <iframe
                width="100%"
                height="100%"
                src={src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                allowFullScreen
            />
        </div>
    );
}