'use client';

import React, { ChangeEvent } from 'react';
import { Clinic } from '@/types';
import { useMessages } from './LanguageSwitcher';

interface SearchFilterProps {
    clinics: Clinic[];
    onFilter: (filtered: Clinic[]) => void;
}

export default function SearchFilters({ clinics, onFilter }: SearchFilterProps) {
    const t = useMessages();

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const term = e.target.value.toLowerCase();
        onFilter(clinics.filter(c =>
            c.name.toLowerCase().includes(term) ||
            c.city.toLowerCase().includes(term)
        ));
    }

    function handleCategory(e: ChangeEvent<HTMLSelectElement>) {
        const key = e.target.value;
        onFilter(key
            ? clinics.filter(c => c.categoryKey === key)
            : clinics
        );
    }

    function handleCity(e: ChangeEvent<HTMLSelectElement>) {
        const cityVal = e.target.value;
        onFilter(cityVal
            ? clinics.filter(c => c.city === cityVal)
            : clinics
        );
    }

    // Define your category keys once:
    const categoryOptions = [
        { key: 'dentistry', labelKey: 'dentistry' },
        { key: 'aesthetic', labelKey: 'aesthetic' },
        { key: 'hairTransplant', labelKey: 'hairTransplant' },
        { key: 'eye', labelKey: 'eye' },
        { key: 'orthopedics', labelKey: 'orthopedics' },
    ];

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
                type="text"
                placeholder={t.searchPlaceholder}
                onChange={handleSearch}
                className="border border-gray-300 bg-gray-100 rounded-lg p-2 flex-1 text-gray-800 placeholder-gray-500"
            />

            <select
                onChange={handleCategory}
                className="border border-gray-400 bg-gray-100 rounded-lg p-2 text-gray-800"
            >
                <option value="">{t.allCategories}</option>
                {categoryOptions.map(opt => (
                    <option key={opt.key} value={opt.key}>
                        {t[opt.labelKey]}
                    </option>
                ))}
            </select>

            <select
                onChange={handleCity}
                className="border border-gray-400 bg-gray-100 rounded-lg p-2 text-gray-800"
            >
                <option value="">{t.allCities}</option>
                {['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa'].map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}