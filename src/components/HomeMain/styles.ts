import styled from 'styled-components';

export const Container = styled.div`
  width: 92%;
  margin: 0 auto;
  padding-top: 24px;

  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (min-width: 500px) {
    grid-template-columns: auto auto auto;
  }
`;

export const Card = styled.div`
  max-width: 9.5rem;
  margin-bottom: 24px;
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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

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
  }

  span {
  }

  .tWineContainer {
    margin-top: 12px;
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
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #7ebc43;

  border-radius: 4px;
`;

export const ButtonList = styled.button`
  width: 100%;
  padding: 12px 24px;
  grid-column: 1 / 3;
  border: 2px solid #c81a78;
  border-radius: 4px;
  color: #c81a78;

  &:hover {
    color: #ffffff;
    background-color: #c81a78;
  }

  @media (min-width: 550px) {
    grid-column: 1 / 4;
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
`;
