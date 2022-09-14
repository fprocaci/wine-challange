import { ResultContainer } from './styles';

const index = props => {
  return (
    <ResultContainer>
      <h2>
        <span>{props.vinhos.length} </span>produtos encontrados
      </h2>
    </ResultContainer>
  );
};
export default index;
