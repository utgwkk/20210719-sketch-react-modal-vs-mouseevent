import { MouseEventHandler, useCallback } from "react";

import styles from "./Draggable.module.css";

export const Draggable = () => {
  const handleMouseDown: MouseEventHandler = useCallback((e) => {
    console.log(`clicked!!!! ${new Date()}`);
  }, []);

  return (
    <div className={styles.container} onMouseDown={handleMouseDown}>
      This area is draggable!!!!!
    </div>
  );
};
