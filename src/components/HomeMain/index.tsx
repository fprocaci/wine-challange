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
import ResultsReturn from '../../components/ResultsReturn/index';
import { useState } from 'react';

function HomeMain(props) {
  const [active, setActive] = useState([]);

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
                <input
                  type="radio"
                  checked={active === 1}
                  onClick={() => setActive(1)}
                />{' '}
                Até R$40
              </li>
              <li className="listFiltro">
                <input
                  type="radio"
                  checked={active === 2}
                  onClick={() => setActive(2)}
                />{' '}
                R$40 A R$60
              </li>
              <li className="listFiltro">
                <input
                  type="radio"
                  checked={active === 3}
                  onClick={() => setActive(3)}
                />{' '}
                R$100 A R$200
              </li>
              <li className="listFiltro">
                <input
                  type="radio"
                  checked={active === 4}
                  onClick={() => setActive(4)}
                />{' '}
                R$200 A R$500
              </li>
              <li className="listFiltro">
                <input
                  type="radio"
                  checked={active === 5}
                  onClick={() => setActive(5)}
                />{' '}
                Acima de R$500
              </li>
            </ol>
          </div>
        </Filtro>
        <ProductsContainer>
          <ResultsReturn vinhos={props.vinhos} />
          <div className="products">
            {props.vinhos.map(vinho => {
              return (
                <Card key={vinho.id}>
                  <CardContainer>
                    <img src={picture} alt="" />
                    <h1>{vinho.name}</h1>
                    <div className=" ">
                      <p>
                        R$ {vinho.price}
                        <span className="off">15% OFF</span>
                      </p>
                    </div>
                    <div className="sWineContainer">
                      <p className="sWineText">
                        <span className="sWine">Sócio Wine </span>
                        <span className="socioValor">
                          {' '}
                          R$ {vinho.priceMember}
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
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
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
