import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./AudioPlayer.module.css";

export type AudioPlayerProps = {
  label?: ReactNode;
  status?: ReactNode;
  secondaryAction?: ReactNode;
  showSecondaryAction?: boolean;
  onPlay?: () => void;
} & HTMLAttributes<HTMLElement>;

export function AudioPlayer({
  label = "Session recording",
  status = "Ready",
  secondaryAction,
  showSecondaryAction = Boolean(secondaryAction),
  onPlay,
  className,
  ...rest
}: AudioPlayerProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-sds-audio-player="ready" {...rest}>
      <div className={styles.meta}>
        <p className={styles.label}>{label}</p>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.actions}>
        {showSecondaryAction ? secondaryAction : null}
        <Button onClick={onPlay}><Icon glyph="play" size={16} /> Play</Button>
      </div>
    </div>
  );
}
