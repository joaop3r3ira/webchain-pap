import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Moeda from './Moeda'
import MoedaCoinGecko from './MoedaCoinGecko'
import Header from './Header'


const Portfolio = ({ thirdWebTokens, sanityTokens, walletAddress, token, thirdWebToken, selectedToken, setSelectedToken, setAction, index, Key }) => {
  const [walletBalance, setWalletBalance] = useState(0)
  const tokenEUR = {}

  for (const token of sanityTokens) {
    tokenEUR[token.contractAddress] = Number(token.precoEUR)
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const TotalBalance = await Promise.all(
        thirdWebTokens.map(async token => {
          const balance = await token.balanceOf(walletAddress)
          return Number(balance.displayValue) * tokenEUR[token.address]
        })
      )
      setWalletBalance(TotalBalance.reduce((acc, curr) => acc + curr, 0))
    }

    return calculateTotalBalance()
  }, [thirdWebTokens, sanityTokens])


  return (
    <Wrapper> 
        <Content>
    <TabelaPortfolio>
        <ItemTabela>
            <Titulo>
                Os teus Assets
            </Titulo>
        </ItemTabela>
        <Divisor />
        <Tabela>
            <ItemTabela>
                <TableRow>
                    <div style={{flex: 3}}><div>
                        <Saldo>
                        <SaldoTitulo>Saldo</SaldoTitulo>
                        <Saldovalue>
                          {walletBalance.toLocaleString()}
                           {'€'}
                        </Saldovalue>
                    </Saldo>
                </div></div>
                    <div style={{flex: 2}}></div>
                    <div style={{flex: 1}}></div>
                </TableRow>
            </ItemTabela>
            <Divisor />
            {sanityTokens.map((token, index) => (
                  <Moeda 
                  key={index}
                  token={token}
                  walletAddress={walletAddress}
                  selectedToken={selectedToken}
                  setSelectedToken={setSelectedToken}
                  thirdWebTokens={thirdWebTokens}
                  thirdWebToken={thirdWebToken}
                  sanityTokens={sanityTokens}
                  setAction={setAction}  
                    />
                    ))}
                  <Divisor />
        </Tabela>
    </TabelaPortfolio>
    <TabelaPortfolio>
        <ItemTabela>
            <Titulo>
               Cryptos
            </Titulo>
        </ItemTabela>
        <Divisor />
        <Tabela>
            <Divisor />
                  <MoedaCoinGecko />
                  <Divisor />

        </Tabela>
    </TabelaPortfolio>
    </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
  margin-bottom: 10rem;
  
`
const Grafico = styled.div`
 border: 1px solid #282b2f;
 padding: 1rem 2rem;
`

const Saldo = styled.div``

const SaldoTitulo = styled.div`
  color: #8a919e;
  font-size: 1.9rem;
`
const Saldovalue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`
const Graficosaldo = styled.div`

`

const TabelaPortfolio = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Tabela = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  
  justify-content: space-between;

  & > th {
    text-align: left;
  }

`
const ItemTabela = styled.div`
  padding: 1rem 2rem;
  
`

const Divisor = styled.div`
  border-bottom: 1px solid #282b2f;
  
`

const Titulo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
