import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 44px;
  display: flex;
  justify-content: center;

  @media (min-width: 550px) {
  }

  @media (min-width: 1120px) {
    padding-top: 39.77px;
  }
`;

export const ContainerCenter = styled.div`
  @media (min-width: 1120px) {
    width: 66%;
    display: flex;
    justify-content: center;
    gap: 32px;
  }
`;

export const Filtro = styled.div`
  display: none;
  @media (min-width: 1120px) {
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    input {
      width: 19.86px;
      height: 20px;
    }

    .inputFiltro {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      margin-top: 32px;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 16px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 12.15px;
    }
  }
`;

export const ProductsContainer = styled.div`
  @media (max-width: 1119px) {
    .products {
      padding-top: 24px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 24px;
      column-gap: 27px;
    }
  }

  @media (min-width: 1120px) {
    .products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }
`;

export const Card = styled.div`
  max-width: 9.5rem;

  @media (min-width: 550px) {
    max-width: 12rem;
  }

  @media (min-width: 1120px) {
    max-width: 256px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 348px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  cursor: pointer;

  img {
    position: absolute;
    top: 16px;
    width: 123px;
    height: 181px;
  }

  h1 {
    width: 100%;
    text-align: center;
    align-items: center;
    font-size: 14px;
    color: #111111;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    color: #888888;
    .valor {
      text-decoration: line-through;
    }
  }

  span {
  }

  .tWineContainer {
    margin-top: 12px;
  }

  .wOff {
    padding-top: 12.1px;
  }
  .off {
    width: 66px;
    height: 16px;
    padding: 1px 8px;
    background-color: #f79552;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    border-radius: 2px;
    margin-left: 3.5px;
  }

  .sWineContainer {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .sWineText {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sWine {
    width: 32px;
    display: flex;
    text-align: right;
    text-transform: uppercase;
    margin-right: 8px;
  }

  .socioValor {
    color: #c81a78;
    font-size: 12px;
    font-weight: 700;
  }

  .nsWine {
    font-size: 10px;
    text-transform: uppercase;
  }

  .price {
    font-size: 20px;
  }

  @media (min-width: 1120px) {
    padding-bottom: 21.49px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #7ebc43;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`;

export const ButtonList = styled.button`
  width: 100%;
  padding: 12px 24px;
  grid-column: 1 / 3;
  border: 2px solid #c81a78;
  border-radius: 4px;
  color: #c81a78;
  margin-top: 32px;

  &:hover {
    color: #ffffff;
    background-color: #c81a78;
  }

  @media (min-width: 550px) {
    grid-column: 1 / 4;
  }

  @media (min-width: 1120px) {
    display: none;
  }
`;

export const ShowList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-column: 1 / 3;
  margin-top: 8px;
  margin-bottom: 29px;

  span {
    color: #1d1d1b;
    font-weight: 700;
    font-size: 18px;
  }

  h2 {
    color: #888888;
    font-weight: 400;
    font-size: 18px;
  }

  @media (min-width: 1120px) {
    display: none;
  }
`;

export const Pagination = styled.div`
  display: none;
  @media (min-width: 1120px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 26.64px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    button {
      border: 1px solid #b6116e;
      padding: 10px 14px;
      border-radius: 3px;
      &:active {
        background-color: #b6116e;
      }
    }

    span {
      color: #b6116e;
    }

    a {
      color: #b6116e;
    }
  }
`;

export const PaginationContainer = styled.div`
  @media (min-width: 1120px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 26.64px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    button {
      border: 1px solid #b6116e;
      padding: 10px 14px;
      border-radius: 3px;
      &:active {
        background-color: #b6116e;
      }
    }

    span {
      color: #b6116e;
    }

    a {
      color: #b6116e;
    }
  }
`;
