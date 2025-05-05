import { Location } from "../interfaces";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{location.name}</h2>
      <p className="text-sm text-gray-500">Type: {location.type}</p>
      <p className="text-sm text-gray-500">Dimension: {location.dimension}</p>
      <p className="text-sm text-gray-500">
        Residents: {location.residents.length}
      </p>
    </div>
  );
}