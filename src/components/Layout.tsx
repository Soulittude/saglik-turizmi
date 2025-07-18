'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { LanguageSwitcher, useMessages } from './LanguageSwitcher';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const t = useMessages();
    return (
        <>
            <header className="bg-primary text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Sağlık Turizmi</h1>
                    <nav className="space-x-6">
                        <Link href="/" className="hover:underline">
                            {t.home}
                        </Link>
                        <Link href="/clinics" className="hover:underline">
                            {t.clinics}
                        </Link>
                    </nav>
                    <LanguageSwitcher />
                </div>
            </header>

            <main className="min-h-[calc(100vh-8rem)]">{children}</main>

            <footer className="bg-gray-100 text-center py-4">
                <p className="text-sm text-gray-600">
                    {t.rights}
                </p>
            </footer>
        </>
    );
}