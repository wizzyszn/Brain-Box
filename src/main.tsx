import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container!);

// Render the app
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
