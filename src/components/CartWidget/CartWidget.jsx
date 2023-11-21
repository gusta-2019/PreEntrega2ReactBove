
import cart from "./assets/cart.svg"
import styles from "../CartWidget/CartWidget.module.css"
export default function CartWidget() {
  return (
    <div className={styles.cart}>
        <img src={cart} alt="cart-widget"></img>
        0
    </div>
  )
}
