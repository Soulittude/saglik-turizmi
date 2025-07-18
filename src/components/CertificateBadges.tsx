'use client';

interface CertificateBadgesProps {
    badges: string[];
}

const badgeMap: Record<string, { label: string; src: string }> = {
    JCI: { label: 'Joint Commission International', src: '/badges/jci.png' },
    'ISO 9001': { label: 'ISO 9001 Certified', src: '/badges/iso-9001.png' },
};

export default function CertificateBadges({ badges }: CertificateBadgesProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {badges.map((key) => {
                const badge = badgeMap[key] || { label: key, src: '' };
                return (
                    <div key={key} className="flex items-center space-x-2">
                        {badge.src && (
                            <img
                                src={badge.src}
                                alt={badge.label}
                                className="w-8 h-8"
                            />
                        )}
                        <span className="text-white text-sm">{badge.label}</span>
                    </div>
                );
            })}
        </div>
    );
}