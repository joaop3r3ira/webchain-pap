import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { FaCheck } from 'react-icons/fa'

const ItemMoeda = ({
    token,
    sender,
    setAction,
    selectedToken,
    setSelectedToken,
    thirdWebTokens,
})   => {
    const [balance, setBalance] = useState('A carregar...')
    const [imageUrl, setImageUrl] = useState(null)
    const [builder] = useState(imageUrlBuilder(client))
    


    useEffect(() => {
        const getBalance = async () => {
            let activeThirdWebToken

            thirdWebTokens.map(thirdWebtoken => {
                if (thirdWebtoken.address === token.contractAddress) {
                    activeThirdWebToken = thirdWebtoken
                }
            })

            const balance = await activeThirdWebToken.balanceOf(sender)
            
            return await setBalance(balance.displayValue.split('.')[0])
        }

        const getImgUrl = async () => {
            const url = builder.image(token.logo.asset._ref).url()
            setImageUrl(url)
          }
      
          getImgUrl()
          getBalance()
        }, [])
      
        

        return (
            <Wrapper
              style={{
                backgroundColor: selectedToken.nome === token.nome && '#141519',
              }}
              onClick={() => {
                setSelectedToken(token)
                setAction('enviar')
              }}
            >
              <Main>
                <Icon>
                  <img src={imageUrl} alt='' />
                </Icon>
                <DetalhesNome>
                  <Nome>{token.nome}</Nome>
                  <Simbolo>{token.simbolo}</Simbolo>
                </DetalhesNome>
              </Main>
              <Saldo>
                {balance} {token.simbolo}
              </Saldo>
              <IsSelected>
                {Boolean(selectedToken.contractAddress === token.contractAddress) && (
                  <FaCheck />
                )}
              </IsSelected>
            </Wrapper>
          )
        }

export default ItemMoeda

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: #0e0f14;
  }
`

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const DetalhesNome = styled.div``

const Nome = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`

const Simbolo = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`

const Saldo = styled.div``

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`