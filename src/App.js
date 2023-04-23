import React from "react";
import "./App.css";
import Header from "./app/Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body  */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
