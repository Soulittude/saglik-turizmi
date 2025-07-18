'use client';

export default function SkeletonCard() {
    return (
        <div className="animate-pulse bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-48 w-full bg-gray-200"></div>
            <div className="p-4 space-y-2">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}