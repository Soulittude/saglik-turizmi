'use client';

import { ChangeEvent } from "react";
import { Clinic } from "@/types";

interface SearchFilterProps {
    clinics: Clinic[];
    onFilter: (filtered: Clinic[]) => void;
}

import React from 'react'

export default function SearchFilters({ clinics, onFilter }: SearchFilterProps) {
    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const term = e.target.value.toLocaleLowerCase();
        const filtered = clinics.filter(c =>
            c.name.toLowerCase().includes(term) || c.city.toLowerCase().includes(term)
        );
        onFilter(filtered);
    }

    function handleCategory(e: ChangeEvent<HTMLSelectElement>) {
        const categoryVal = e.target.value;
        const filtered = categoryVal ?
            clinics.filter(c => c.category === categoryVal)
            : clinics;
        onFilter(filtered);
    }
    function handleCity(e: ChangeEvent<HTMLSelectElement>) {
        const cityVal = e.target.value;
        const filtered = cityVal ?
            clinics.filter(c => c.city === cityVal)
            : clinics;
        onFilter(filtered)
    }
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
                type="text"
                placeholder="Klinik adı veya şehir ara"
                onChange={handleSearch}
                className="border border-gray-300 rounded-lg p-2 flex-1" />
            <select onChange={handleCategory} className="border border-gray-400 bg-gray-100 rounded-lg p-2 text-gray-800 placeholder-gray-500">
                <option value="">Tüm Kategoriler</option>
                <option value="Diş">Diş</option>
                <option value="Estetik">Estetik</option>
                <option value="Saç Ekimi">Saç Ekimi</option>
                <option value="Göz">Göz</option>
                <option value="Ortopedi">Ortopedi</option>
            </select>
            <select onChange={handleCity} className="border border-gray-400 bg-gray-100 rounded-lg p-2 text-gray-800 placeholder-gray-500">
                <option value="">Tüm Şehirler</option>
                <option value="İstanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
                <option value="Bursa">Bursa</option>
            </select>
        </div >
    );
}
