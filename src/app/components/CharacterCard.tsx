import { Character } from "../interfaces";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white">
      <img
        src={character.image || "https://via.placeholder.com/50"}
        alt={character.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{character.name}</h2>
        <p className="text-sm text-gray-500">{character.species}</p>
      </div>
    </div>
  );
}