import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskContextProvider>
        <Router>
          <App />
        </Router>
      </TaskContextProvider>
    </Provider>
  </React.StrictMode>
);
