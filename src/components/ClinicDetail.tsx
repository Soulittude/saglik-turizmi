'use client';

import Image from 'next/image';
import { useMessages } from './LanguageSwitcher';
import { Clinic } from '@/types';
import ServiceList from './ServiceList';
import BookingModal from './BookingModal';
import BeforeAfterGallery from './BeforeAfterGallery';
import GoogleMap from './GoogleMaps';
import WhatsAppButton from './WhatsAppButton';
import CertificateBadges from './CertificateBadges';

interface Props {
    clinic: Clinic;
}

export default function ClientClinicDetail({ clinic }: Props) {
    const t = useMessages();
    const address = `${clinic.name}, ${clinic.city}, ${clinic.district}`;

    return (
        <div className="px-4 py-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold text-primary mb-4">{clinic.name}</h1>

            {/* Hero image */}
            <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                <Image
                    src={clinic.image}
                    alt={clinic.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                    <h2 className="font-medium text-lg mb-2">{t.category}</h2>
                    <p>{clinic.category}</p>
                </div>
                <div>
                    <h2 className="font-medium text-lg mb-2">{t.location}</h2>
                    <p>{clinic.city}, {clinic.district}</p>
                </div>
                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        {t.locationMap}
                    </h2>
                    <GoogleMap query={address} heightClass="h-48" />
                </section>
                <div>
                    <h2 className="font-medium text-lg mb-2">{t.expertise}</h2>
                    <ul className="list-disc list-inside">
                        {clinic.specialties.map((s) => (<li key={s}>{s}</li>))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-medium text-lg mb-2">{t.languages}</h2>
                    <p>{clinic.languages.join(', ')}</p>
                </div>
            </div>

            {/* Services and pricing */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">{t.servicesPrices}</h2>
                <ServiceList services={clinic.services} />
            </section>

            {/*Booking*/}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">{t.booking}</h2>
                <BookingModal />
            </section>

            {/* Before/After Gallery */}
            <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                    {t.gallery}
                </h2>
                <div className="max-w-xl mx-auto">
                    <BeforeAfterGallery
                        beforeImg="/placeholders/before-placeholder.jpg"
                        afterImg="/placeholders/after-placeholder.jpg"
                    />
                </div>
            </section>

            {/* Accreditation & Contact */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">{t.certificatesContact}</h2>
                <CertificateBadges badges={clinic.accreditations} />
                <div className="space-y-2">
                    <p>Telephone: <a href="tel:+90..." className="text-accent">+90 555 5555555</a></p>
                    <p>WhatsApp: <a href="https://wa.me/..." className="text-accent">{t.sendMessage}</a></p>
                </div>
            </section>

            {/* Description */}
            <section>
                <h2 className="text-2xl font-semibold text-primary mb-4 ">{t.about}</h2>
                <p className="text-white leading-relaxed ">{clinic.description}</p>
            </section>

            <WhatsAppButton
                phone="905555555555"
                message="Merhaba, klinik hakkında bilgi almak istiyorum."
            />
        </div>

    );
}