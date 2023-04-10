import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body  */}
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
