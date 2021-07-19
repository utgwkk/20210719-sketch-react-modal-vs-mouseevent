import { useCallback, useState } from "react";
import Modal from "react-modal";

import { Clickable } from "./Clickable";

export const ClickableContainsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <h2>contains modal</h2>
      <Clickable>
        This area is clickable!!!!!
        <p>
          <button onClick={() => setIsOpen(true)}>open modal</button>
        </p>
        <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
          <div>
            <h2>Modal</h2>
            <button onClick={handleRequestClose}>close</button>
          </div>
        </Modal>
      </Clickable>
    </div>
  );
};
