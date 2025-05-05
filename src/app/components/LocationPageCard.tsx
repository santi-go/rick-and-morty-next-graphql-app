import { Location } from "../interfaces";

export default function LocationPageCard({ location }: { location: Location }) {
  const {
    name = "Unknown Name",
    type = "Unknown Type",
    dimension = "Unknown Dimension",
    residents = [],
    created = "Unknown Date",
  } = location;

  return (
    <div className="p-6 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">{name}</h1>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Type:</strong> {type}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Dimension:</strong> {dimension}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Residents:</strong>
      </p>
      <ul className="list-disc list-inside">
        {residents.map((resident, index) => (
          <li key={index} className="text-sm text-[var(--foreground)]">
            {resident}
          </li>
        ))}
      </ul>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Created:</strong> {new Date(created).toLocaleDateString()}
      </p>
    </div>
  );
}