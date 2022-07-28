import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h1>Task of Mr Basu</h1>
          <p>Built By Oualid</p>
          {children}
        </div>
      </div>
    </div>
  );
}
