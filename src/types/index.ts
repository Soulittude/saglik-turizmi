export interface Service {
  name: string;
  priceRange: string;
}

export interface Clinic {
  id: number;
  name: string;
  categoryKey:
    | "dentistry"
    | "aesthetic"
    | "hairTransplant"
    | "eye"
    | "orthopedics"
    | "generalHospital";
  category: string;
  city: string;
  district: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  priceRange: string;
  image: string;
  description: string;
  accreditations: string[];
  languages: string[];
  services: Service[];
}
