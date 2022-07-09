import { useState } from 'react'
import styled from 'styled-components'
import ItemMoeda from './ItemMoeda'



const Selectcrypto = ({
    setAction, //
    selectedToken, // selecionar o token
    setSelectedToken, //mudar o token selecionado
    sanityTokens, // tokens do sanity
    thirdWebTokens, // tokens do thirdweb
    walletAddress, // endereço da wallet
  }) => {
    return (
      <Wrapper>
        <Titulo>Selecionar Token</Titulo>
        <ListadeCoins>
          {sanityTokens.map((token, index) => (
            <ItemMoeda
              key={index}
              token={token}
              sender={walletAddress}
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
              thirdWebTokens={thirdWebTokens}
              sanityTokens={sanityTokens}
              setAction={setAction}
            />
      ))}
      </ListadeCoins>
      </Wrapper>
    )
}
  
  export default Selectcrypto
  
  const Wrapper = styled.div``
  const Titulo = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `
  const ListadeCoins = styled.div`
    display: flex;
    flex-direction: column;
  `