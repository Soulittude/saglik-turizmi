'use client';

import { useState, useEffect } from 'react';
import { clinics as allClinics } from '@/lib/data';
import ClinicCard from '@/components/ClinicCard';
import SkeletonCard from '@/components/LoadingSkeleton';
import SearchFilters from '@/components/SearchFilters';
import { Clinic } from '@/types';
import { useMessages } from '@/components/LanguageSwitcher';


export default function ClinicsPage() {
    const [filtered, setFiltered] = useState<Clinic[]>(allClinics);
    const [loading, setLoading] = useState(true);
    const t = useMessages();

    useEffect(() => {
        // simulate loading delay
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="px-4 py-8">
            <h1 className="text-3xl font-semibold text-primary mb-4 text-center">
                {t.allClinics}
            </h1>
            <SearchFilters clinics={allClinics} onFilter={setFiltered} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                    : filtered.map((c) => <ClinicCard key={c.id} clinic={c} />)}
            </div>
        </div>
    );
}