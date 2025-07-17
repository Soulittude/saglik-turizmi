'use client';

import { useState } from 'react';
import { clinics as allClinics } from '@/lib/data';
import ClinicCard from '@/components/ClinicCard';
import SearchFilters from '@/components/SearchFilters';
import { Clinic } from '@/types';

export default function ClinicsPage() {
    const [filtered, setFiltered] = useState<Clinic[]>(allClinics);

    return (
        <div className="px-4 py-8">
            <h1 className="text-3xl font-semibold text-primary mb-4 text-center">
                Tüm Klinikler
            </h1>
            <SearchFilters clinics={allClinics} onFilter={setFiltered} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(c => (
                    <ClinicCard key={c.id} clinic={c} />
                ))}
            </div>
        </div>
    );
}