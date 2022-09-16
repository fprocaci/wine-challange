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
                {' > '}
                <span>Chile</span>
                {' > '}
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
          <div className="">
            <Link href="/">
              <a>Vinhos</a>
            </Link>
            {' > '}
            <span>Chile</span>
            {' > '}
            <span>Vale Central</span>
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
