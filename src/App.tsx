import { useCallback, useState } from "react";
import Modal from "react-modal";

import { Clickable } from "./Clickable";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Clickable>
        This area is clickable!!!!!
        <button onClick={() => setIsOpen(true)}>open modal</button>
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
