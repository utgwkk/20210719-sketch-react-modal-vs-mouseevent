import { ClickableAlongWithModal } from "./ClickableAlongWithModal";
import { ClickableContainsModal } from "./ClickableContainsModal";

export const App = () => {
  return (
    <div className="App">
      <ClickableContainsModal />
      <ClickableAlongWithModal />
    </div>
  );
};
