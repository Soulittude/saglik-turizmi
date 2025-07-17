import { Clinic } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ClinicCardProps {
    clinic: Clinic;
}

export default function ClinicCard({ clinic }: ClinicCardProps) {
    return (
        <Link href={`/clinic/${clinic.id}`} className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <Image src={clinic.image}
                    alt={clinic.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">{clinic.name}</h3>
                <p className="text-sm text-gray-600">{clinic.city}, {clinic.district}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium">{clinic.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500 ml-2">({clinic.reviewCount})</span>
                </div>
                <p className="mt-2 text-sm font-medium text-accent">{clinic.priceRange}</p>
            </div>
        </Link>
    );
}