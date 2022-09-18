import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 500px) {
  }
`;

export const ContainerDesktop = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: none;
  .back {
    width: 66%;
    padding-top: 30px;
    padding-bottom: 25px;
    .linkBack {
      display: flex;
      align-items: center;
      span {
        margin-left: 22px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 1200px) {
    .back {
      width: 80%;
    }
  }
  .wineContent {
    width: 66%;
    display: flex;

    .wineImg {
      width: 40.563rem;
      height: 580px;
      /* margin-left: 129px; */
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 381px;
        height: 579px;
      }
    }

    .wineDescription {
      width: 462.22px;
      margin-top: 10px;
      h1 {
        color: #111111;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
      }
      .wineResume {
        width: 100%;
        display: flex;
        align-items: center;
        color: #555555;
        svg {
          margin-right: 8px;
        }
        .country {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin-right: 8px;
          white-space: nowrap;
        }
        .type {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin-right: 8px;
          white-space: nowrap;
        }
        .type2 {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin-right: 8px;
          white-space: nowrap;
        }
        .Weight {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin-right: 8px;
          white-space: nowrap;
        }
        .amount {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.5rem;
          margin-right: 8px;
          white-space: nowrap;
        }
      }
    }
    .winePrice {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 48px;
      .sPrice {
        width: 100%;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;
        color: #c81a78;
      }
      .nsPrice {
        width: 100px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        margin-top: 8px;

        color: #888888;
      }
    }
    .wineText {
      width: 100%;
      margin-top: 48px;
      h3 {
        font-family: 'Neo Sans Std';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 5px;

        color: #111111;
      }
      p {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        margin-top: 8px;

        color: #666666;
      }
    }

    .button {
      width: 328px;
      height: 56px;
      background: #7ebc43;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 48px;

      hr {
        width: 2px;
        height: 33px;
        mix-blend-mode: normal;
        opacity: 0.1;
        border: 1px solid #ffffff;
        opacity: 10%;
      }

      .count {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 42px;
        .display {
          width: 39px;
          height: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 17px;
          margin-left: 17px;

          span {
          }
        }

        .remove {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 15px;

          font-family: 'Open Sans SemiBold';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
        }
        .add {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 15px;

          font-family: 'Open Sans SemiBold';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
        }
      }
      button {
        width: 50%;
        height: 100%;
        background: #7ebc43;
        border: none;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
      }
    }
  }

  @media (min-width: 701px) {
    display: flex;
  }
`;

export const ProductRoute = styled.div`
  display: flex;
  margin-bottom: 16px;
  a {
    color: #c81a78;
    margin-right: 0.5rem;
  }
  span {
    svg {
      color: #888888;
      margin-right: 0.5rem;
    }
  }
  .country {
    color: #c81a78;
    margin-right: 0.5rem;
  }
  .city {
    color: #888888;
    margin-right: 0.5rem;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  .route {
    a {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #c81a78;
    }
    .country {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #c81a78;
    }
    .city {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #888888;
    }
    .seta {
      font-size: 12px;
      color: #888888;
    }
  }

  .productTitle {
    padding-top: 16px;
    h1 {
      font-family: 'Neo Sans Std';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #111111;
    }
  }
  .wineImg {
    margin-top: 16px;
    position: relative;
    img {
      height: 333px;
      width: 218px;
    }
  }

  .wineDescription {
    width: 21.438rem;
    margin-top: 16px;
    padding-bottom: 20px;
    h3 {
      font-family: 'Neo Sans Std';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #333333;
    }

    p {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #555555;
      margin-top: 8.61px;
    }
  }

  .wineResume {
    display: flex;
    align-items: center;
    span {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #333333;
    }

    .local {
      margin-left: 8.22px;
    }
    .type {
      margin-left: 8px;
    }
    .type2 {
      margin-left: 8px;
    }
    .amount {
      margin-left: 8px;
    }
    .Weight {
      margin-left: 8px;
    }
  }

  .wineFooter {
    width: 100%;
    height: 80px;
    background: #ffffff;
    position: sticky;
    bottom: 0;
    box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
    font-family: 'Lato';
    font-style: normal;

    display: flex;
    justify-content: start;
    align-items: center;

    .priceFooter {
      width: 45%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      position: relative;
      .wineOff {
        width: 52px;
        height: 16px;
        background-color: #f26649;
        position: absolute;
        top: -10px;
        font-weight: 700;
        font-size: 10px;
        line-height: 16px;
        text-align: center;
        margin-left: 16px;
      }
      .valorWine {
        width: 74px;
        height: 20px;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        color: #555555;
        margin-left: 16px;
        margin-top: 10px;
        text-decoration: line-through;
      }
      .sWine {
        width: 100%;
        height: 28px;
        color: #c81a78;
        margin-left: 16px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
      }
      .nsWine {
        width: 100%;
        height: 16px;
        font-weight: 700;
        font-size: 10px;
        line-height: 16px;
        color: #555555;
        margin-left: 16px;
      }
    }

    .buttonFooter {
      width: 50%;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 180px;
        height: 48px;
        background: #7ebc43;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        color: #ffffff;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
