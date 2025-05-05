'use client'

import { useEffect, useState } from "react";
import { fetchByCategory } from "./services/api.service";
import { Character, Episode, Location } from "./interfaces";
import { CATEGORIES } from "./constants";
import ItemList from "./components/ItemList";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const fetchHomeData = async () => {
    fetchByCategory(CATEGORIES.character).then(setCharacters);
    fetchByCategory(CATEGORIES.episode).then(setEpisodes);
    fetchByCategory(CATEGORIES.location).then(setLocations);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold row-start-1">Rick & Morty</h1>
      <main className="grid grid-cols-1 gap-8 sm:grid-cols-3 row-start-2 w-full">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-semibold mb-4">Characters</h2>
          <ItemList items={characters} category={CATEGORIES.character} />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
          <ItemList items={episodes} category={CATEGORIES.episode} />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-semibold mb-4">Locations</h2>
          <ItemList items={locations} category={CATEGORIES.location} />
        </div>
      </main>
    </div>
  );
}
