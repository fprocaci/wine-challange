import { CartContainer } from './styles';
import picture from '../../assets/cart.png';

const Cart = () => {
  return (
    <CartContainer>
      <img src={picture} alt="Carrinho de compras" />
    </CartContainer>
  );
};
export default Cart;
