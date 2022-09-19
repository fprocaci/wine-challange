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
          <NavLink title="Loja" path="/loja" />
          <NavLink title="Produtores" path="/produtores" />
          <NavLink title="Ofertas" path="/ofertas" />
          <NavLink title="Eventos" path="/eventos" />
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
