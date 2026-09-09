import type { Contributor } from "../types";

interface ContributorCardProps {
  contributor: Contributor;
}

export function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <article>
      <div>
        {contributor.avatar ? (
          <img
            src={contributor.avatar}
            alt={`${contributor.name}'s avatar`}
          />
        ) : (
          <div aria-hidden="true">
            {contributor.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div>
        <h3>{contributor.name}</h3>

        {contributor.role && <p>{contributor.role}</p>}

        <div>
          {contributor.github && (
            <a
              href={contributor.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          {contributor.linkedin && (
            <a
              href={contributor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {contributor.twitter && (
            <a
              href={contributor.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          )}

          {contributor.website && (
            <a
              href={contributor.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}

          {contributor.cv && (
            <a
              href={contributor.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          )}
        </div>
      </div>
    </article>
  );
}