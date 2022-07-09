import React, { useState } from 'react'
import styled from 'styled-components'
import Enviar from './Enviar'
import Selectcrypto from './Selectcrypto'
import { TailSpin } from  'react-loader-spinner'
import Receber from './Receber'

const TransferenciaModal = ({ sanityTokens, thirdWebTokens, walletAddress  }) => {
  const [action, setAction] = useState('enviar')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])



const styleselecionado = {
  color: '#3773f5',
}

const stylenaoselecionado = {
  border: '1px solid #282b2f',
}

const renderLogic = () => {
  if (action === 'enviar') {
    return (
      <Enviar
        setAction={setAction}
        thirdWebTokens={thirdWebTokens}
        sanityTokens={sanityTokens}
        selectedToken={selectedToken}
        walletAddress={walletAddress}
      />
    )
  } else if (action === 'select') {
    return (
      <Selectcrypto
        setAction={setAction}
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
        walletAddress={walletAddress}
      />
    )
  } else if (action === 'receber') {
    return (
      <Receber
        setAction={setAction}
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
        walletAddress={walletAddress}
      />
    )  
  } else if (action === 'transferring') {
    return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
      }}
    >
       <h2> A enviar... </h2>
  <TailSpin
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
</div>
    )
  } else if (action === 'transferred') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#27ad75',
        }}
      >
        Transferência completa
      </div>
    )
  }
}

  return (
    <Wrapper>
      <Selector>
      <Opcao style={action === 'enviar' ? styleselecionado : stylenaoselecionado} 
      onClick={() => setAction('enviar')}>
        <p>Enviar</p>
        </Opcao>
      <Opcao style={action === 'receber' ? styleselecionado : stylenaoselecionado}
      onClick={() => setAction('receber')}>
        <p>Receber</p>
      </Opcao>
      </Selector>
      <ModalMain>
        {renderLogic()}
      </ModalMain>
    </Wrapper>
  )
}

export default TransferenciaModal


const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`

const Opcao = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
  `