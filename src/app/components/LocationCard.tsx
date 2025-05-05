import { Location } from "../interfaces";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="text-lg font-semibold text-[var(--accent)]">{location.name}</h2>
      <p className="text-sm text-[var(--secondary-accent)]">Type: {location.type}</p>
      <p className="text-sm text-[var(--secondary-accent)]">Dimension: {location.dimension}</p>
      <p className="text-sm text-[var(--secondary-accent)]">
        Residents: {location.residents.length}
      </p>
    </div>
  );
}