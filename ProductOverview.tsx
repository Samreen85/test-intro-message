import React from "react"

export default function ProductOverview() {
  return (
    <div>
      <img src="/hero.png" />

      <div onClick={handleSave}>Save</div>

      <button>
        <IconClose />
      </button>

      <h1 style={{ fontSize: "72px", color: "#ff0000" }}>Settings</h1>

      <input placeholder="Email" />
    </div>
  )
}
