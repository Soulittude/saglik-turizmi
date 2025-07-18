import { Service } from "@/types";

interface ServiceListProps {
    services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {

    return (<ul className="space-y-4">
        {services.map((s, idx) => (
            <li key={idx} className="flex justify-between border-b pb-2">
                <span className="font-medium text-white-800">{s.name}</span>
                <span className="font-medium text-green-600">{s.priceRange}</span>
            </li>
        ))}
    </ul>);
}