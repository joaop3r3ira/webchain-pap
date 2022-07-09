import React from 'react'
import Portfolio from './Portfolio'
import styled from 'styled-components'

const Principal = ({ thirdWebTokens, sanityTokens, walletAddress}) => {
  return (
    <Wrapper>
        <Portfolio 
       walletAddress={walletAddress} 
       sanityTokens={sanityTokens} 
       thirdWebTokens={thirdWebTokens}  
      />
    </Wrapper>
  )
}

export default Principal

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }

`
