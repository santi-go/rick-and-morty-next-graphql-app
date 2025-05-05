import { Episode } from "../interfaces";

export default function EpisodePageCard({ episode }: { episode: Episode }) {
  const {
    name = "Unknown Name",
    air_date = "Unknown Air Date",
    episode: episodeCode = "Unknown Episode Code",
    characters = [],
    created = "Unknown Date",
  } = episode;

  return (
    <div className="p-6 border rounded-lg shadow-md bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-4 text-[var(--accent)]">{name}</h1>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Air Date:</strong> {air_date}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Episode:</strong> {episodeCode}
      </p>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Characters:</strong>
      </p>
      <ul className="list-disc list-inside">
        {characters.map((character, index) => (
          <li key={index} className="text-sm text-[var(--foreground)]">
            {character}
          </li>
        ))}
      </ul>
      <p className="text-lg">
        <strong className="text-[var(--secondary-accent)]">Created:</strong> {new Date(created).toLocaleDateString()}
      </p>
    </div>
  );
}