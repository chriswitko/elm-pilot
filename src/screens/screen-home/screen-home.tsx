import Pilot from "../../components/pilot/pilot";
import { Button } from "../../types/types";
import styles from "./screen-home.module.css";

export default function ScreenHome() {
  const buttons: Button[] = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
    {
      label: "HOME",
      value: "home",
    },
    {
      label: "0",
      value: "0",
    },
    {
      label: "@",
      value: "at",
    },
    {
      label: "OPTS",
      value: "opts",
    },
    {
      label: <span className="material-icons">arrow_upward</span>,
      value: "up",
    },
    {
      label: "INFO",
      value: "info",
    },
    {
      label: <span className="material-icons">west</span>,
      value: "left",
    },
    {
      label: <span className="material-icons">arrow_right</span>,
      value: "play",
    },
    {
      label: <span className="material-icons">east</span>,
      value: "right",
    },
    {
      label: "back",
      value: "back",
    },
    {
      label: <span className="material-icons">arrow_downward</span>,
      value: "down",
    },
    {
      label: "EXIT",
      value: "exit",
    },
  ];

  return (
    <div className={styles.screenHome}>
      <Pilot buttons={buttons} />
    </div>
  );
}
