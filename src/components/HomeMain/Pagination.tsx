import { useEffect, useState } from 'react';
import { PaginationContainer } from './styles';

// const [itens, setItens] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await fetch('API')
//       .then(response => response.json())
//       .then(data => data);

//     setItens(result);
//   };
//   fetchData();
// }, []);

const Pagination = () => {
  return <PaginationContainer></PaginationContainer>;
};
export default Pagination;
