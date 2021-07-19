import { ClickableAlongWithModal } from "./ClickableAlongWithModal";
import { ClickableContainsModal } from "./ClickableContainsModal";

export const App = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <ClickableContainsModal />
      <ClickableAlongWithModal />
    </div>
  );
};
