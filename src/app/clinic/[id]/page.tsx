import ClientClinicDetail from '@/components/ClinicDetail';
import { clinics } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return clinics.map((c) => ({ id: c.id.toString() }));
}

export default async function ClinicDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const clinic = clinics.find((c) => c.id.toString() === id);
    if (!clinic) notFound();

    return <ClientClinicDetail clinic={clinic} />;
}