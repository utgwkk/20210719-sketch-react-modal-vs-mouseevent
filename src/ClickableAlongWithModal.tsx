import { useCallback, useState } from "react";
import Modal from "react-modal";

import { Clickable } from "./Clickable";

export const ClickableAlongWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <h2>along with modal</h2>
      <Clickable>
        This area is clickable!!!!!
        <p>
          <button onClick={() => setIsOpen(true)}>open modal</button>
        </p>
      </Clickable>
      <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
        <div>
          <h2>Modal</h2>
          <button onClick={handleRequestClose}>close</button>
        </div>
      </Modal>
    </div>
  );
};
