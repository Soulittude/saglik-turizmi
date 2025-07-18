'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { clinics } from '@/lib/data';
import ClinicCard from '@/components/ClinicCard';
import SkeletonCard from '@/components/LoadingSkeleton';
import { useMessages } from '@/components/LanguageSwitcher';

export default function HomePage() {
  const featured = clinics.slice(0, 6);
  const [loading, setLoading] = useState(true);
  const t = useMessages();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold max-w-2xl mx-auto">
          {t.heroTitle}
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          {t.heroDesc}
        </p>
        <Link
          href="/clinics"
          className="inline-block mt-6 bg-accent text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          {t.explore}
        </Link>
      </section>

      {/* Featured Clinics*/}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
          {t.featured}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : featured.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
        </div>
      </section>
    </div>
  );
}