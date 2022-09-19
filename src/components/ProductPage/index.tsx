import {
  Container,
  ContainerDesktop,
  ContainerMobile,
  ProductRoute
} from './styles';
import Link from 'next/link';
import Header from '../Header';
import picture from '../../assets/bottleDesktop.png';
import { useState } from 'react';

export function ProductPage(props) {
  const [numero, setNumero] = useState(1);
  return (
    <>
      <Header />
      <Container>
        {props.children}
        <ContainerDesktop>
          <div className="back">
            <Link href="/">
              <a className="linkBack">
                <svg
                  width="13"
                  height="21"
                  viewBox="0 0 13 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7739 19.8231C13.1237 19.3957 13.0607 18.7657 12.6332 18.416L2.57915 10.1899L12.6332 1.96387C13.0607 1.61414 13.1237 0.984118 12.7739 0.556673C12.4242 0.129229 11.7942 0.066227 11.3667 0.415953L0.366732 9.41595C0.134596 9.60588 -3.05176e-05 9.88998 -3.05176e-05 10.1899C-3.05176e-05 10.4898 0.134596 10.7739 0.366732 10.9639L11.3667 19.9639C11.7942 20.3136 12.4242 20.2506 12.7739 19.8231Z"
                    fill="black"
                  />
                </svg>
                <span>Voltar</span>
              </a>
            </Link>
          </div>
          <div className="wineContent">
            <div className="wineImg">
              <img src={picture} alt="Imagem do vinho" />
            </div>
            <div className="wineDescription">
              <ProductRoute>
                <Link href="/">
                  <a>Vinhos</a>
                </Link>
                <span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.000290394 9.65581C0.000290394 9.56083 0.0398744 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.0267929 0.474959 -0.0399875 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287631 9.81824 0.000290394 9.73703 0.000290394 9.65581"
                      fill="#888888"
                    />
                  </svg>
                </span>
                <span className="country">Estados Unidos</span>
                <span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.000290394 9.65581C0.000290394 9.56083 0.0398744 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.0267929 0.474959 -0.0399875 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287631 9.81824 0.000290394 9.73703 0.000290394 9.65581"
                      fill="#888888"
                    />
                  </svg>
                </span>
                <span className="city">Califórnia</span>
              </ProductRoute>
              <h1>{'Apothic Red 2019'}</h1>
              <div className="wineResume">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="16" height="16" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_6842_5054"
                        transform="scale(0.00666667)"
                      />
                    </pattern>
                    <image
                      id="image0_6842_5054"
                      width="150"
                      height="150"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <span className="country">{'Estados Unidos'}</span>{' '}
                <span className="type">{'Tinto'}</span>
                <span className="type2">{'Meio Seco/Demi-Sec'}</span>
                <span className="Weight">{'750 ml'}</span>
                <div className="stars">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.45192 0.659118C6.76953 0.0430373 7.68198 0.0507658 7.9969 0.659118L9.75451 4.07215L13.6869 4.62121C14.3921 4.71917 14.6747 5.55179 14.1633 6.02869L11.3183 8.68383L11.9912 12.4345C12.1123 13.1125 11.3668 13.6178 10.7423 13.3033L7.22441 11.5323L3.70651 13.3033C3.08205 13.6203 2.3365 13.1125 2.45763 12.4345L3.13052 8.68383L0.28551 6.02869C-0.225891 5.55179 0.0567257 4.71917 0.761926 4.62121L4.69432 4.07215L6.45192 0.659118Z"
                      fill="#F9B950"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45192 1.65912C7.76953 1.04304 8.68198 1.05077 8.9969 1.65912L10.7545 5.07215L14.6869 5.62121C15.3921 5.71917 15.6747 6.55179 15.1633 7.02869L12.3183 9.68383L12.9912 13.4345C13.1123 14.1125 12.3668 14.6178 11.7423 14.3033L8.22441 12.5323L4.70651 14.3033C4.08205 14.6203 3.3365 14.1125 3.45763 13.4345L4.13052 9.68383L1.28551 7.02869C0.774109 6.55179 1.05673 5.71917 1.76193 5.62121L5.69432 5.07215L7.45192 1.65912Z"
                      fill="#F9B950"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45192 1.65912C7.76953 1.04304 8.68198 1.05077 8.9969 1.65912L10.7545 5.07215L14.6869 5.62121C15.3921 5.71917 15.6747 6.55179 15.1633 7.02869L12.3183 9.68383L12.9912 13.4345C13.1123 14.1125 12.3668 14.6178 11.7423 14.3033L8.22441 12.5323L4.70651 14.3033C4.08205 14.6203 3.3365 14.1125 3.45763 13.4345L4.13052 9.68383L1.28551 7.02869C0.774109 6.55179 1.05673 5.71917 1.76193 5.62121L5.69432 5.07215L7.45192 1.65912Z"
                      fill="#F9B950"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45192 1.65912C7.76953 1.04304 8.68198 1.05077 8.9969 1.65912L10.7545 5.07215L14.6869 5.62121C15.3921 5.71917 15.6747 6.55179 15.1633 7.02869L12.3183 9.68383L12.9912 13.4345C13.1123 14.1125 12.3668 14.6178 11.7423 14.3033L8.22441 12.5323L4.70651 14.3033C4.08205 14.6203 3.3365 14.1125 3.45763 13.4345L4.13052 9.68383L1.28551 7.02869C0.774109 6.55179 1.05673 5.71917 1.76193 5.62121L5.69432 5.07215L7.45192 1.65912Z"
                      fill="#F9B950"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45192 1.65912C7.76953 1.04304 8.68198 1.05077 8.9969 1.65912L10.7545 5.07215L14.6869 5.62121C15.3921 5.71917 15.6747 6.55179 15.1633 7.02869L12.3183 9.68383L12.9912 13.4345C13.1123 14.1125 12.3668 14.6178 11.7423 14.3033L8.22441 12.5323L4.70651 14.3033C4.08205 14.6203 3.3365 14.1125 3.45763 13.4345L4.13052 9.68383L1.28551 7.02869C0.774109 6.55179 1.05673 5.71917 1.76193 5.62121L5.69432 5.07215L7.45192 1.65912Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                </div>
                <span className="amount">{'(02)'}</span>
              </div>
              <div className="winePrice">
                <span className="sPrice">{'R$ 63,67'}</span>
                <div>
                  <span className="nsPrice">{'Não sócio R$ 120,95/UN.'}</span>
                </div>
              </div>

              <div className="wineText">
                <h3>Comentário do Sommelier</h3>
                <p>
                  Produzido no terroir californiano, esse tinto mescla as
                  variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot.
                  Apothic é um vinho inspirado nas antigas Apothecas (adegas
                  subterrâneas), um lugar misterioso onde há mais de 800 anos os
                  viticultores misturavam e armazenavam seus cobiçados vinhos.
                </p>
              </div>
              <div className="button">
                <div className="count">
                  <button
                    className="remove"
                    onClick={() => {
                      numero <= 1 ? null : setNumero(numero - 1);
                    }}
                  >
                    <svg
                      width="6"
                      height="3"
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M0.480469 2.61523V0.662109H5.5V2.61523H0.480469Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <div className="display">
                    <span>{numero}</span>
                  </div>
                  <button className="add" onClick={() => setNumero(numero + 1)}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.11133 5.81836H0.224609V4.08008H4.11133V0.0957031H5.86914V4.08008H9.76562V5.81836H5.86914V9.7832H4.11133V5.81836Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <hr />
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </ContainerDesktop>
        <ContainerMobile>
          <div className="route">
            <Link href="/">
              <a>Vinhos</a>
            </Link>
            <span className="seta">{' > '}</span>
            <span className="country">Chile</span>
            <span className="seta">{' > '}</span>
            <span className="city">Vale Central</span>
          </div>
          <div className="productTitle">
            <h1>Apothic Red 2019</h1>
          </div>
          <div className="wineResume">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect x="0.887695" width="16" height="16" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6847_4943"
                    transform="scale(0.00666667)"
                  />
                </pattern>
                <image
                  id="image0_6847_4943"
                  width="150"
                  height="150"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <span className="local">{'Estados Unidos'}</span>
            <span className="type">{'Tinto'}</span>
            <span className="type2">{'Seco'}</span>
            <span className="amount">{'750 ml'}</span>
          </div>
          <div className="wineImg">
            <img src={picture} alt="Imagem do vinho" />
          </div>
          <div className="wineDescription">
            <h3>Descrição</h3>
            <p>
              Produzido no terroir californiano, esse tinto mescla as variedades
              Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
              inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
              misterioso onde há mais de 800 anos os viticultores misturavam e
              armazenavam seus cobiçados vinhos.
            </p>
          </div>
          <div className="wineFooter">
            <div className="priceFooter">
              <span className="wineOff">15% OFF</span>
              <span className="valorWine">R$ 30.007,40</span>
              <span className="sWine">R$ 28.000,00</span>
              <span className="nsWine">preço não-sócio {'R$ 29.999,90'}</span>
            </div>
            <div className="buttonFooter">
              <button>Adicionar</button>
            </div>
          </div>
        </ContainerMobile>
      </Container>
    </>
  );
}
