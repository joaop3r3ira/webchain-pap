import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TransferenciaModal from './Modal/TransferenciaModal'
import Image from 'next/image'
import webchainlogo from '../assets/logo.png'
 
Modal.setAppElement('#__next')


const Header = ({ walletAddress, sanityTokens, thirdWebTokens,  connectWallet }) => {
  const router = useRouter()



  const customstyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
  }

  return (
    <Wrapper>
      <LogoContainer>
      <Logo><Image src={webchainlogo} alt="" /></Logo>
      </LogoContainer>
        <ButtonsContainer> 
          {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Conectada</WalletLinkTitle>
          <WalletAddress>
             {walletAddress.slice(0,7)}... {walletAddress.slice(35)}
          </WalletAddress>
          </WalletLink>
          ) : (
            <Button onClick={() => connectWallet('injected')}>
              Conectar Wallet
              </Button>
          )}
          <Link href={'/?transferir=1'}>  
          <Button> Enviar / Receber </Button>
          </Link>
        </ButtonsContainer>
        <Modal
          isOpen={!! router.query.transferir}
          onRequestClose={() => router.push('/')}
          style={customstyles}
          >
          <TransferenciaModal
          sanityTokens={sanityTokens} 
          thirdWebTokens={thirdWebTokens} 
          walletAddress={walletAddress} />
          </Modal>
    </Wrapper>  
  )
}

export default Header

const Wrapper = styled.div`
width: calc(100%);
padding: 1rem 1.5rem;
border-bottom: 1px solid #282b2f;
display: flex;
align-items: center;
`

const LogoContainer = styled.div`
  display: end;
`

const Logo = styled.div`
  height: 40px;
  width: 200px;
  object-fit: contain;
  margin-left: 4rem;
  margin-right: 125vh;
  align-content: center;
  

  @media (max-width: 1000px) {
  height: 100px;
  width: 100px;
  object-fit: contain;
  margin-right: 7vh;
  }

  @media (max-width: 500px) {
  height: 0px;
  width: 0px;
  margin-left: -20px;
  object-fit: contain;
  margin-right: 2vh;
  }

`


const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }

`

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
`




