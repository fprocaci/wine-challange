import {
  Card,
  Container,
  Button,
  CardContainer,
  ButtonList,
  ShowList
} from './styles';
import picture from '../../assets/bottle3.png';

function HomeMain(props) {
  return (
    <Container>
      {props.vinhos.map(vinho => {
        return (
          <Card>
            <CardContainer>
              <img src={picture} alt="" />
              <h1>{vinho.name}</h1>
              <p>
                R$ {vinho.price}
                <span className="off">15% OFF</span>
              </p>
              <div>
                <p>
                  <span className="sWine">Sócio Wine </span>
                  <span className="socioValor">R$ {vinho.priceMember}</span>
                </p>
              </div>
              <div>
                <p>
                  Não Sócio{' '}
                  <span className="naoSocioValor">
                    R$ {vinho.priceNonMember}
                  </span>
                </p>
              </div>
            </CardContainer>
            <Button>Adicionar</Button>
          </Card>
        );
      })}

      <ButtonList>Mostrar Mais</ButtonList>
      <ShowList>
        <h2>
          Exibindo <span>{'8'}</span> de <span>{'48'}</span> produtos no total
        </h2>
      </ShowList>
    </Container>
  );
}
export default HomeMain;
