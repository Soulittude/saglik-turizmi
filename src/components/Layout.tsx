import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <header className="bg-primary text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Sağlık Turizmi</h1>
                    <nav className="space-x-6">
                        <Link href="/" className="hover:underline">
                            Ana Sayfa
                        </Link>
                        <Link href="/clinics" className="hover:underline">
                            Klinikler
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="min-h-[calc(100vh-8rem)]">{children}</main>

            <footer className="bg-gray-100 text-center py-4">
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Sağlık Turizmi. Tüm hakları saklıdır.
                </p>
            </footer>
        </>
    );
}