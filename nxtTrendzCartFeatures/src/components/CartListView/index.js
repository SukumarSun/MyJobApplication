import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'
import CartSummary from '../CartSummary'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      return (
        <>
          <button type="button" onClick={removeAllCartItems}>
            Remove All
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>

          <CartSummary />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
