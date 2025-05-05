import Image from "next/image";
import { Character } from "../interfaces";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative w-16 h-16">
        <Image
          src={character.image || "https://via.placeholder.com/50"}
          alt={character.name}
          fill
          className="rounded-full object-cover border-2 border-[var(--accent)]"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[var(--accent)]">{character.name}</h2>
        <p className="text-sm text-[var(--secondary-accent)]">{character.species}</p>
      </div>
    </div>
  );
}