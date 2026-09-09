import { useEffect, useRef } from "react";
import type { Contributor } from "../types";
import { ContributorCard } from "./ContributorCard";

interface CreditsModalProps {
  project: string;
  contributors: Contributor[];
  onClose: () => void;
}

export function CreditsModal({
  project,
  contributors,
  onClose,
}: CreditsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div
      className="madeby-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="madeby-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="madeby-title"
        tabIndex={-1}
      >
        <button
          type="button"
          className="madeby-close"
          onClick={onClose}
          aria-label="Close credits"
        >
          ×
        </button>

        <header className="madeby-header">
          <p className="madeby-eyebrow">CREDITS</p>

          <h2 id="madeby-title">{project}</h2>

          <p>
            Made with care by the people behind this project.
          </p>
        </header>

        <div className="madeby-contributors">
          {contributors.map((contributor) => (
            <ContributorCard
              key={contributor.name}
              contributor={contributor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}