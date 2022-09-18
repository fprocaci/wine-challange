import {
  Card,
  Container,
  Button,
  CardContainer,
  ButtonList,
  ShowList,
  Filtro,
  ContainerCenter,
  ProductsContainer,
  Pagination
} from './styles';
import picture from '../../assets/bottle3.png';
import selo from '../../assets/selos.png';
import ResultsReturn from '../../components/ResultsReturn/index';
import { useState } from 'react';
import Link from 'next/link';

function HomeMain(props) {
  const [active, setActive] = useState<number>();
  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(props.vinhos.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = props.vinhos.slice(startIndex, endIndex);

  return (
    <Container>
      <ContainerCenter>
        <Filtro>
          <h3>Refine sua busca</h3>

          <div className="inputFiltro">
            <span>Por preço</span>
            {}
            <ol className="list">
              <li className="listFiltro">
                <label htmlFor="input_1">
                  <input
                    id="input_1"
                    type="radio"
                    checked={active === 1}
                    onChange={() => setActive(1)}
                  />{' '}
                  Até R$40
                </label>
              </li>
              <li className="listFiltro">
                <label htmlFor="input_2">
                  <input
                    id="input_2"
                    type="radio"
                    checked={active === 2}
                    onChange={() => setActive(2)}
                  />{' '}
                  R$40 A R$60
                </label>
              </li>
              <li className="listFiltro">
                <label htmlFor="input_3">
                  <input
                    id="input_3"
                    type="radio"
                    checked={active === 3}
                    onChange={() => setActive(3)}
                  />{' '}
                  R$100 A R$200
                </label>
              </li>
              <li className="listFiltro">
                <label htmlFor="input_4">
                  <input
                    id="input_4"
                    type="radio"
                    checked={active === 4}
                    onChange={() => setActive(4)}
                  />{' '}
                  R$200 A R$500
                </label>
              </li>
              <li className="listFiltro">
                <label htmlFor="input_5">
                  <input
                    id="input_5"
                    type="radio"
                    checked={active === 5}
                    onChange={() => setActive(5)}
                  />{' '}
                  Acima de R$500
                </label>
              </li>
            </ol>
          </div>
        </Filtro>
        <ProductsContainer>
          <ResultsReturn vinhos={props.vinhos} />
          <div className="products">
            {currentItens.map(vinho => {
              const priceLeft = parseInt(vinho.priceMember);
              const priceRight = parseInt(
                ((vinho.priceMember % 1) * 100).toString()
              );
              return (
                <Card key={vinho.id}>
                  <Link href="/pageProducts">
                    <CardContainer>
                      <div className="cardImage">
                        <img src={picture} alt="Imagem do vinho" />
                        <img
                          src={selo}
                          className="selo"
                          alt="selo de promoção da wine"
                        />
                      </div>
                      <h1>{vinho.name}</h1>
                      <div className="wOff">
                        <p>
                          <span className="valor">R$ {vinho.price}</span>
                          <span className="off">15% OFF</span>
                        </p>
                      </div>
                      <div className="sWineContainer">
                        <p className="sWineText">
                          <span className="sWine">Sócio Wine </span>
                          <span className="socioValor">
                            {' '}
                            R$ <span className="price">{priceLeft}</span>,
                            {priceRight}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="nsWine">Não Sócio </span>
                          <span className="nsValor">
                            R$ {vinho.priceNonMember}
                          </span>
                        </p>
                      </div>
                    </CardContainer>
                  </Link>
                  <Button>Adicionar</Button>
                </Card>
              );
            })}
          </div>

          <ButtonList>Mostrar Mais</ButtonList>
          <ShowList>
            <h2>
              Exibindo <span>{props.vinhos.length}</span> de{' '}
              <span>{props.vinhos.length}</span> produtos no total
            </h2>
          </ShowList>
          <Pagination>
            {Array.from(Array(pages + 1), (vinho, index) => {
              return (
                <button key={index} onClick={() => setCurrentPage(index)}>
                  {index}
                </button>
              );
            })}
            <a href="/">
              Próximo{' '}
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
                  fill="#B6116E"
                />
              </svg>
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
                  fill="#B6116E"
                />
              </svg>
            </a>
          </Pagination>
        </ProductsContainer>
      </ContainerCenter>
    </Container>
  );
}
export default HomeMain;
