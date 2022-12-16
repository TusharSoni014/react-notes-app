import React from "react";

export default function Header({ handleDarkMode }) {
  return (
    <div className="header">
      <h1>React Notes App</h1>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            handleDarkMode((previousState) => !previousState);
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
