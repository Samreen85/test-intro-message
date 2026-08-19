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
      <table>
        <tr><td>Total</td><td>$99</td></tr>
      </table>
      <a onClick={goBack}>Back</a>
    </div>
  )
}
