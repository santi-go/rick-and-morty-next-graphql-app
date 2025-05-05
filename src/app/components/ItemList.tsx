'use client';

import Link from "next/link";
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
    const path = `/${category}/${item.id}`;

    return (
      <Link href={path}>
        {category === "character" && <CharacterCard character={item as Character} />}
        {category === "episode" && <EpisodeCard episode={item as Episode} />}
        {category === "location" && <LocationCard location={item as Location} />}
      </Link>
    );
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