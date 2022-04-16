/// <reference types="react-scripts" />

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "modern-normalize";
import "./assets/styles/styles.scss"
import { setupStore } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
