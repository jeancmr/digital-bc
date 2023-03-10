import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <div className="background">
        <div className="card">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
