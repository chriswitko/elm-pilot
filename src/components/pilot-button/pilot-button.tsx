import { ReactNode } from "react";
import styles from "./pilot-button.module.css";

export interface PilotButtonProps {
  label: string | ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export default function PilotButton({
  label,
  selected,
  onClick,
}: PilotButtonProps) {
  return (
    <div
      className={selected ? styles.pilotButtonSelected : styles.pilotButton}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
