'use client'

import { useEffect, useState } from "react";
import { fetchByCategory } from "./services/api.service";
import { Character } from "./interfaces";
import CharacterList from "./components/CharacterList";
import { CATEGORIES } from "./constants";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => { fetchByCategory(CATEGORIES.character).then(setCharacters); }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Rick & Morty</h1>
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}
