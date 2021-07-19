import { MouseEventHandler, useCallback, useState } from "react";
import Modal from "react-modal";

import styles from "./Draggable.module.css";

export const Draggable = () => {
  const handleMouseDown: MouseEventHandler = useCallback((e) => {
    console.log(`clicked!!!! ${new Date()}`);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.container} onMouseDown={handleMouseDown}>
      This area is draggable!!!!!
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
        <div>
          <h2>Modal</h2>
          <button onClick={handleRequestClose}>close</button>
        </div>
      </Modal>
    </div>
  );
};
