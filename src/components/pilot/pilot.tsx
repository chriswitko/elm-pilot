import { useState } from "react";
import { Button } from "../../types/types";
import { Led } from "../led/led";
import PilotButton from "../pilot-button/pilot-button";
import styles from "./pilot.module.css";

interface PilotProps {
  buttons: Button[];
}

export default function Pilot({ buttons }: PilotProps) {
  const [blink, setBlink] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (value: string) => {
    setBlink(true);
    setSelectedButton(value);
    // delay for 1 second
    setTimeout(() => {
      setBlink(false);
    }, 2000);

    switch (value) {
      case "exit": {
        setSelectedButton("");
        break;
      }
      case "home": {
        // redirect to home screen
        break;
      }
    }
  };

  return (
    <div className={styles.pilotArea}>
      <Led blinking={blink} />
      <div className={styles.pilotGrid}>
        {buttons.map((button) => (
          <PilotButton
            key={button.value}
            label={button.label}
            selected={selectedButton === button.value}
            onClick={() => handleClick(button.value)}
          />
        ))}
      </div>
    </div>
  );
}
