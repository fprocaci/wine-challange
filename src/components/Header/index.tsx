import NavLink from './NavLink';
import Logo from './Logo';
import { Container, ContainerCenter, ButtonLogo, IconCart } from './styles';
import Button from './Button';
import Icon from './Icon';
import Cart from './Cart';

function Header() {
  return (
    <Container>
      <ContainerCenter>
        <ButtonLogo>
          <Button />
          <Logo />
        </ButtonLogo>
        <ul>
          <NavLink title="Clube" path="/" />
          <NavLink title="Loja" path="#" />
          <NavLink title="Produtores" path="#" />
          <NavLink title="Ofertas" path="#" />
          <NavLink title="Eventos" path="#" />
        </ul>
        <IconCart>
          <Icon />
          <Cart />
        </IconCart>
      </ContainerCenter>
    </Container>
  );
}

export default Header;
