import { Episode } from "../interfaces";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{episode.name}</h2>
      <p className="text-sm text-gray-500">Episode: {episode.episode}</p>
      <p className="text-sm text-gray-500">Air Date: {episode.air_date}</p>
    </div>
  );
}