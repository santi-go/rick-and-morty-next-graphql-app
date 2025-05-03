import CharacterCard from "./CharacterCard";
import { Character } from "../interfaces";

export default function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ul className="space-y-4">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}