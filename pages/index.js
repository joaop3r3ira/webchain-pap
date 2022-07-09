import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'

export default function Home() {
  const { address, connectWallet } = useWeb3()

  return (
  <Wrapper>
    {address ? (
      <Dashboard address={address} />
    ) : (
  <WalletConnect>
    <Button onClick={() => connectWallet('injected')}>
      Conectar Metamask Wallet
    </Button>
    <Detalhes>
      WEBCHAIN
    </Detalhes>
  </WalletConnect>
    )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;`


const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`

  border: 1px solid #282b2f;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  border-radius: 2rem;
  background-color: #3773f5;
  color: #000;
  
  &:hover {
  cursor: pointer;
} 
  `

const Detalhes = styled.div`
  font-size: 5rem;
  text-align: center;
  margin-top: 2rem;
  font-weight:  800;
  color: #282b2f;
  `	





  