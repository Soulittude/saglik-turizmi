import { clinics } from "@/lib/data";
import ClinicCard from "@/components/clinicCard";


export default async function HomePage() {
  const featured = clinics.slice(0, 6);
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold max-w-2xl mx-auto">
          Türkiye'nin Sağlık Turizmi Klinikleri
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          En kaliteli tedavi hizmetleri için önde gelen kliniklere göz atın.
        </p>
        <button className="mt-6 bg-accent text-white px-6 py-3 rounded-xl">
          Klinikleri Keşfet
        </button>
      </section>
      {/* Featured Clinics*/}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
          Öne Çıkan Klinikler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </section>
    </div>
  );
}
