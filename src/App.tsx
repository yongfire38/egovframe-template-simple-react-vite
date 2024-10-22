import React from "react";
import RootRoutes from "@/routes";
import { BrowserRouter as Router } from "react-router-dom";

import "@/css/base.css";
import "@/css/layout.css";
import "@/css/component.css";
import "@/css/page.css";
import "@/css/response.css";

function App(): JSX.Element {
  return (
    <div className="wrap">
      <React.StrictMode>
        <Router>
          <RootRoutes />
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
