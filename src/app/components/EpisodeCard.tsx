import { Episode } from "../interfaces";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="text-lg font-semibold text-[var(--accent)]">{episode.name}</h2>
      <p className="text-sm text-[var(--secondary-accent)]">Episode: {episode.episode}</p>
      <p className="text-sm text-[var(--secondary-accent)]">Air Date: {episode.air_date}</p>
    </div>
  );
}