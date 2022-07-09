import {useState, useEffect} from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../lib/sanity'



const Moeda = ({
  token,
  thirdWebToken,
  walletAddress,
  activeThirdWebToken,
  sanityTokens,
  thirdWebTokens,
}) => {
    const [imageUrl, setImageUrl] = useState(null)
        const [walletBalance, setBalance] = useState(0)

        useEffect(() => {

    const getImgUrl = async () => {
      const imgUrl =  imageUrlBuilder(client).image(token.logo).url()
      setImageUrl(imgUrl)
    }


    getImgUrl()
  }, [])

    return ( 
      <Wrapper>
       <div>
           <div style={{flex: 3}}>
               <NomeCol>
                   <IconMoeda>
                        <img src={imageUrl} alt='' style={{width: "20px",height: "20px"}}/>
                   </IconMoeda>
                   <div>
                       <Primario>{token.nome}</Primario>
                       <Secundario>{token.simbolo}</Secundario>
                   </div>
               </NomeCol>
               </div>
               <div style={{flex: 2}}>
                   <Primario>
                   </Primario>
                   <Secundario>
                       {/* {moeda.balanceCoin} {moeda.sign} */}
                   </Secundario>
               </div>
           <div style={{flex: 1}}></div>
           <div style={{flex: 0}}>
                   {/* <BsThreeDotsVertical /> */}
           </div>
       </div>
   </Wrapper> 
   )
              }

/* const Moeda = ({
    token,
    sender,
    setAction,
    walletAddress,
    sanityTokens,
    thirdWebTokens,
})   => {
    const [balance, setBalance] = useState('A carregar...')
    const [imageUrl, setImageUrl] = useState(null)
    const [builder] = useState(imageUrlBuilder(client))
    const [walletBalance, setWalletBalance] = useState(0)
    const tokenEUR = {}



        const getImgUrl = async () => {
            const url = builder.image(token.logo.asset._ref).url()
            setImageUrl(url)
          }
      
          getImgUrl()
          getBalance()
        }
      
  for (const token of sanityTokens) {
    tokenEUR[token.contractAddress] = Number(token.precoEUR)
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const TotalBalance = await Promise.all(
        thirdWebTokens.map(async token => {
          const balance = await token.balanceOf(walletAddress)
          return Number(balance.displayValue)
        })
      )
      setWalletBalance(TotalBalance.reduce((acc, curr) => acc + curr, 0))
    }

    return calculateTotalBalance()
  }, [thirdWebTokens, sanityTokens])
 */
export default Moeda

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`

const NomeCol = styled.div`
  display: flex;
  align-items: center;
`

const IconMoeda = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`

const Primario = styled.div`
  margin-bottom: 0.1rem;
`

const Secundario = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`