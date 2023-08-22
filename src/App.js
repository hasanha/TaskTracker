import React from "react";
import { Navbar } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
