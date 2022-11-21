// Write your code here
import CardContext from '../../context/CartContext'

const CartSummary = () => (
  <CardContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </>
      )
    }}
  </CardContext.Consumer>
)
export default CartSummary
