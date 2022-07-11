import { useState, useEffect } from 'react'
import Coingecko from './Coingecko'
import styled from 'styled-components';


const MoedaCoinGecko = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch ] = useState(''); 
  
  useEffect(() => {
    const interval = setInterval(() => {
    fetchCryptoData();
    console.log('A atualizar...');
    }, 1000)
    return () => clearInterval(interval);
  }, [cryptoData]);


  const fetchCryptoData = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur');
    const apiResponse = await data.json();
    const sortedData = apiResponse.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h );
   /*  console.log(sortedData); */
    setCryptoData(sortedData)
  }

    const handleChange = e => {
      setSearch(e.target.value);
    }

    const cryptos = cryptoData.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <CoinLista>
      <Coinprocurar>
      <CoinTexto>Procurar Crypto</CoinTexto>
        <form>
          <CoinInput type="text" placeholder='Procurar'
          onChange={handleChange} />
        </form>
      </Coinprocurar>
      {cryptos.map(coin => {
        return <Coingecko 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          price={coin.current_price} 
          marketcap={coin.market_cap} 
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
      })}
    </CoinLista>


  )
}

export default MoedaCoinGecko

const CoinLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
`

const Coinprocurar = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CoinTexto = styled.h1 `
 margin-bottom: 32px;
 text-align: center;
`

const CoinInput = styled.input `
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-image: linear-gradient( -225deg, #f6f6f6, #e3e3e3 );
  color: black;

  &::placeholder {
    color: black;
  }
`


