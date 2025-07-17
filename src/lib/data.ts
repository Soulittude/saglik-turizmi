import { Clinic } from "@/types";

export const clinics: Clinic[] = [
  {
    id: 1,
    name: "Acıbadem Maslak Hastanesi",
    category: "Genel Hastane",
    city: "İstanbul",
    district: "Maslak",
    specialties: ["Kalp Cerrahisi", "Onkoloji", "Estetik"],
    rating: 4.8,
    reviewCount: 1250,
    priceRange: "$$",
    image: "/clinics/acibadem.jpg",
    description:
      "Uluslararası standartlarda sağlık hizmeti sunan, modern teknolojilerle donatılmış bir hastane.",
    accreditations: ["JCI", "ISO 9001"],
    languages: ["Türkçe", "İngilizce", "Arapça"],
    services: [
      { name: "Kalp Ameliyatı", priceRange: "15.000€ - 25.000€" },
      { name: "Estetik Rinoplasti", priceRange: "3.000€ - 5.000€" },
    ],
  },
  {
    id: 2,
    name: "Estetik Bursa Kliniği",
    category: "Estetik",
    city: "Bursa",
    district: "Nilüfer",
    specialties: ["Estetik Cerrahi", "Dolgu", "Botoks"],
    rating: 4.5,
    reviewCount: 800,
    priceRange: "$$",
    image: "/clinics/bursa-estetik.jpg",
    description: "Deneyimli cerrah kadrosu ve hasta odaklı hizmet anlayışı.",
    accreditations: ["ISO 9001"],
    languages: ["Türkçe", "İngilizce"],
    services: [
      { name: "Yüz Germe", priceRange: "4.000€ - 7.000€" },
      { name: "Dudak Dolgusu", priceRange: "500€ - 800€" },
    ],
  },
];
