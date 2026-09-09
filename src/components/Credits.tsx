import { useState } from "react";
import type { CreditsProps } from "../types";
import { CreditsModal } from "./CreditsModal";
import "./credits.css";g

export function Credits({
  project = "Credits",
  contributors,
}: CreditsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="madeby-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`View credits for ${project}`}
      >
        ✨ Credits
      </button>

      {isOpen && (
        <CreditsModal
          project={project}
          contributors={contributors}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}