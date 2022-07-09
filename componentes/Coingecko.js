import React from 'react'
import { BsVolumeDown } from 'react-icons/bs'
import styled from 'styled-components'

const coingecko = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <CoinContainer>
      <CoinRow>
      <Coin>
        <img src={image} alt='crypto' />
        <h1>{name}</h1>
        <CoinSimbolo>{symbol}</CoinSimbolo>
      </Coin>
      <CoinData>
        <CoinPreco>{price}€</CoinPreco>
        <CoinVolume>{volume.toLocaleString()}€</CoinVolume>
        {priceChange < 0 ? (
          <CoinPercent style={{ color: 'red' }}>
            {priceChange.toFixed(2)}%</CoinPercent>
        ) : (
        <CoinPercent style={{ color: 'green' }}>
          {priceChange.toFixed(2)}%</CoinPercent>
          )}
          <CoinMarketCap>
           Mkt Cap: {marketcap.toLocaleString()}€
          </CoinMarketCap>
      </CoinData>
      </CoinRow>
    </CoinContainer>
  )
}

export default coingecko


const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; 
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
  `

const Coin = styled.p`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
  & > h1 {
    font-size: 16px;
    width: 150px;
  }
  & > img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`
const CoinSimbolo = styled.div`
  text-transform: uppercase;
`

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`

const CoinPreco = styled.p`
  width: 110px;
`
const CoinVolume = styled.p`
  width: 200px;
`

const CoinMarketCap = styled.p`
  width: 240px;
`

const CoinPercent = styled.p`
  width: 80px;
`
