import { clinics } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceList from '@/components/ServiceList';
import BookingModal from '@/components/BookingModal';
import ClientClinicDetail from '@/components/ClinicDetail';

export async function generateStaticParams() {
    return clinics.map((c) => ({ id: c.id.toString() }));
}

export default async function ClinicDetailPage({ params }: { params: { id: string } }) {
    const clinic = clinics.find((c) => c.id.toString() === params.id);
    if (!clinic) notFound();

    return (
        <ClientClinicDetail clinic={clinic} />
    );
}