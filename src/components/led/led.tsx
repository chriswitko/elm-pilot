import styles from "./led.module.css";

interface LedProps {
  blinking?: boolean;
}

export function Led({ blinking }: LedProps) {
  return (
    <div className={blinking ? styles.ledIconBlinking : styles.ledIcon}></div>
  );
}
