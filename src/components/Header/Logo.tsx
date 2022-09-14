import { LogoContainer } from './styles';
import picture from '../../assets/black.png';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={picture} alt="Logotipo da Wine" />
    </LogoContainer>
  );
};
export default Logo;
