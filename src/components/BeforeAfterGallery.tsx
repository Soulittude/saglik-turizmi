'use client';

import { useState } from 'react';

interface BeforeAfterGalleryProps {
    beforeImg: string;
    afterImg: string;
    heightClass?: string; // optional Tailwind height class
}

export default function BeforeAfterGallery({ beforeImg, afterImg, heightClass = 'h-56' }: BeforeAfterGalleryProps) {
    const [pos, setPos] = useState(50);

    return (
        <div className={`relative w-full ${heightClass} select-none`}>
            {/* Before image as base */}
            <img
                src={beforeImg}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* After image clipped to slider position */}
            <div
                className="absolute top-0 left-0 bottom-0 overflow-hidden"
                style={{ width: `${pos}%` }}
            >
                <img
                    src={afterImg}
                    alt="After"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Slider handle line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white opacity-75"
                style={{ left: `${pos}%` }}
            />

            {/* Range input control */}
            <input
                type="range"
                min={0}
                max={100}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 opacity-50"
                aria-label="Before After Slider"
            />
        </div>
    );
}