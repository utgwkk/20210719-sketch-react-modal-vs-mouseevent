import { FC, MouseEventHandler, useCallback } from "react";

import styles from "./Clickable.module.css";

export const Clickable: FC = ({ children }) => {
  const handleMouseDown: MouseEventHandler = useCallback((e) => {
    console.log(`clicked!!!! ${new Date()}`);
  }, []);

  return (
    <div className={styles.container} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
