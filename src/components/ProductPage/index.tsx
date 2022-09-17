import {
  Container,
  ContainerDesktop,
  ContainerMobile,
  ProductRoute
} from './styles';
import Link from 'next/link';
import Header from '../Header';
import picture from '../../assets/bottleDesktop.png';

export function ProductPage(props) {
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
                <span>{' > '}</span>
                <span>Chile</span>
                <span>{' > '}</span>
                <span>Vale Central</span>
              </ProductRoute>
              <h1>Nome do Vinho</h1>
              <div className="wineResume">
                {'Estados Unidos'} {'Tinto Meio Seco/Demi-Sec'}
                {'750 ml'}
                {'(02)'}
              </div>
              <span>{'R$ 63,67'}</span>
              <span>{'Não sócio R$ 120,95/UN.'}</span>

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
              <button>Adicionar</button>
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
