import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4.5rem;
  /* height: 5.514rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 700px) {
    position: sticky;
    top: 0;
    z-index: 20;
    box-shadow: none;
  }

  @media (min-width: 701px) {
    height: 5.514rem;
  }
`;

export const ContainerCenter = styled.div`
  width: 66%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    margin-left: 5.188rem;
  }

  @media (max-width: 1200px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonLogo = styled.div`
  width: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const IconCart = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  button {
    width: 1.7rem;
    height: 1.7rem;
    background-color: #ffffff;
    border: none;
    scale: 1.15;
  }

  @media (min-width: 1120px) {
    display: none;
  }
`;

export const LogoContainer = styled.div``;

export const LogoDesktop = styled.a`
  margin-left: 0;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoMobile = styled.a`
  display: none;
  margin-left: 0px;
  @media (max-width: 700px) {
    display: block;
    margin-left: 27.38px;
  }
`;

export const SvgContainer = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;

  svg {
    width: 56px;
    height: 59.96px;
    color: black;
    cursor: pointer;
    margin-right: 25px;
  }
`;

export const IconDesktop = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const IconMobile = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
  svg {
    height: 24.436113357543945px;
    width: 25.413795471191406px;
  }
`;

export const CartContainer = styled.div`
  img {
    width: 55px;
    height: 52px;
    color: black;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  display: flex;
  align-items: center;
  height: 5.514rem;
  border-bottom: ${props =>
    props.isActive ? '2px solid #D14B8F' : '2px solid #FFFFFF'};
  cursor: pointer;
  a {
    color: ${props => (props.isActive ? '#D14B8F' : '#555555')};
    transition: 0.5s;

    &:hover {
      color: #d14b8f;
    }
  }

  @media (max-width: 1120px) {
    display: none;
  }
`;
