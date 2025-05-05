'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Category, Character, Episode, Location } from "@/app/interfaces";
import { fetchById } from "@/app/services/api.service";
import CharacterPageCard from "@/app/components/CharacterPageCard";
import EpisodePageCard from "@/app/components/EpisodePageCard";
import LocationPageCard from "@/app/components/LocationPageCard";

export default function ItemPage() {
    const { id, category } = useParams<{ id: string, category: Category }>();
    const [item, setItem] = useState<Character | Location | Episode>({} as Character | Location | Episode);
    const fetchItemById = async () => { fetchById(category, id).then(setItem); }
   
    useEffect(() => {  
        fetchItemById();
    }, []);

    const renderItemPageCard = () => {
        if (!item) return <p>Loading...</p>;
        return (
            <>
            {category === "character" && <CharacterPageCard character={item as Character} />}
            {category === "episode" && <EpisodePageCard episode={item as Episode} />}
            {category === "location" && <LocationPageCard location={item as Location} />}   
            </>
        )
    }


    return (
        <div className="p-8">
      {renderItemPageCard()}
    </div>
    );
}