import React, {useState, useEffect, Component} from 'react'
import Header from '../componentes/header'
import styled from 'styled-components'
import Principal from '../componentes/Principal'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/9c1f49b8ebba4628a6c2306a6a94218b'
    )
  )
)


const Dashboard = ({address}) => {
  const [sanityTokens, setSanityTokens] = useState([])
  const [ thirdWebTokens, setThirdWebTokens ] = useState([])
  
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const moedas = await fetch(
        "https://9jcj3krf.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'moedas'%5D%20%7B%0A%20%20nome%2C%0A%20%20precoEUR%2C%0A%20%20contractAddress%2C%0A%20%20simbolo%2C%0A%20%20logo%2C%0A%20%20%7D",
      )
      const sanityTokens = (await moedas.json()).result
      setSanityTokens(sanityTokens)
      
      setThirdWebTokens(
        sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
      )
    }
  
    return getSanityAndThirdWebTokens();
  }, []); 

  return (
    <Wrapper>
        <ContainerPricinpal>
    <Header 
    walletAddress={address} 
    sanityTokens={sanityTokens} 
    thirdWebTokens={thirdWebTokens} 
    />
    <Principal
    walletAddress={address} 
    sanityTokens={sanityTokens} 
    thirdWebTokens={thirdWebTokens} 
    />
        </ContainerPricinpal>
    </Wrapper>
  )
  
 
}

export default Dashboard


const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #000000;
    color: white;
`

const ContainerPricinpal = styled.div`
    flex: 1;
`