import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4rem;
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
`;

export const ContainerCenter = styled.div`
  width: 66.666667%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonLogo = styled.div`
  width: 50%;
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
`;

export const LogoContainer = styled.div`
  img {
    width: 78px;
    height: 22px;
    margin-left: 27.38px;
  }
`;

export const SvgContainer = styled.div`
  svg {
    width: 26px;
    height: 25px;
    color: black;
    cursor: pointer;
    margin-right: 25px;
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
  height: 4rem;
  border-bottom: ${props =>
    props.isActive ? '2px solid #D14B8F' : '2px solid #FFFFFF'};
  cursor: pointer;
  a {
    color: ${props => (props.isActive ? '#D14B8F' : '#555555')};
    transition: 0.5s;

    &hover {
      color: green;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
