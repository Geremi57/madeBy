import { useState } from "react";
import type { CreditsProps } from "../types";
import { ContributorCard } from "./ContributorCard";

export function Credits({ project = "Credits", contributors }: CreditsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View credits for ${project}`}
      >
        ✨ Credits
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project} credits`}
        >
          <div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close credits"
            >
              ×
            </button>

            <h2>{project}</h2>
            <p>Made by the people behind this project.</p>

            <div>
  {contributors.map((contributor) => (
    <ContributorCard
      key={contributor.name}
      contributor={contributor}
    />
  ))}
</div>
          </div>
        </div>
      )}
    </>
  );
}