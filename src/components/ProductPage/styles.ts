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
  .wineContent {
    width: 66%;
    display: flex;

    .wineImg {
      width: 50%;
      height: 579px;
      margin-left: 129px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .wineDescription {
      width: 50%;
      h1 {
        color: #111111;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
      }
      .wineResume {
        color: #555555;
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
    padding-bottom: 10px;
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
