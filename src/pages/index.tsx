import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header/index';
import HomeMain from '../components/HomeMain';
import ResultsReturn from '../components/ResultsReturn';
import { useEffect, useState } from 'react';

export default function Home() {
  const [vinhos, setVinhos] = useState([]);

  useEffect(() => {
    fetch(`https://wine-back-test.herokuapp.com/products?page=1&limit=10`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setVinhos(data.items);
      });
  }, []);
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <ResultsReturn vinhos={vinhos} />
        <HomeMain vinhos={vinhos} />
      </main>
    </HomeContainer>
  );
}