import CharacterCard from "./CharacterCard";
import EpisodeCard from "./EpisodeCard";
import LocationCard from "./LocationCard";
import { Character, Episode, Location } from "../interfaces";
import { Category } from "../interfaces";

interface ItemListProps {
  items: Character[] | Episode[] | Location[];
  category: Category;
}

export default function ItemList({ items, category }: ItemListProps) {
  const renderCard = (item: Character | Episode | Location) => {
    switch (category) {
      case "character":
        return <CharacterCard character={item as Character} />;
      case "episode":
        return <EpisodeCard episode={item as Episode} />;
      case "location":
        return <LocationCard location={item as Location} />;
      default:
        return null;
    }
  };

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={(item as Character).id || (item as Episode).id || (item as Location).id}>
          {renderCard(item)}
        </li>
      ))}
    </ul>
  );

}