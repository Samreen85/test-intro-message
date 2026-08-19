import React from "react"

export default function Checkout() {
  return (
    <div>
      <img src="/cart.png" />
      <div onClick={pay}>Pay now</div>
      <button><IconTrash /></button>
      <input placeholder="Card number" />
      <h1 style={{ fontSize: "80px", color: "#00ff00" }}>Checkout</h1>
      <span onClick={close}>×</span>
    </div>
  )
}
