import Image from "next/image";
import { Character } from "../interfaces";

export default function CharacterPageCard({ character }: { character: Character }) {
  const {
    name = "Unknown Name",
    status = "Unknown Status",
    species = "Unknown Species",
    type = "Unknown Type",
    gender = "Unknown Gender",
    origin = { name: "Unknown Origin" },
    location = { name: "Unknown Location" },
    image = "https://via.placeholder.com/150",
    episode = [],
    created = "Unknown Date",
  } = character;

  return (
    <div className="p-6 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">{name}</h1>
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover border-2 border-[var(--accent)]"
        />
      </div>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Status:</strong> {status}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Species:</strong> {species}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Type:</strong> {type}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Gender:</strong> {gender}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Origin:</strong> {origin.name}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Location:</strong> {location.name}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Episodes:</strong>
      </p>
      <ul className="list-disc list-inside">
        {episode.map((ep, index) => (
          <li key={index} className="text-sm text-[var(--foreground)]">
            {ep}
          </li>
        ))}
      </ul>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Created:</strong> {new Date(created).toLocaleDateString()}
      </p>
    </div>
  );
}