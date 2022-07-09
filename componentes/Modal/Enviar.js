import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

const Enviar = ({ selectedToken, setAction, thirdWebTokens, walletAddress }) => {
    const [amount, setAmount] = useState('')
    const [recipient, setRecipient] = useState('')
    const [imageUrl, setImageUrl] = useState(null)
    const [activeThirdWebToken, setActiveThirdWebToken] = useState()
    const [balance, setBalance] = useState("Carregando...")

   useEffect(() => {
    const activeToken = thirdWebTokens.find(
        token => token.address === selectedToken.contractAddress
        )
        setActiveThirdWebToken(activeToken)
    }, [thirdWebTokens, selectedToken])

   useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url()
    setImageUrl(url)
},[selectedToken])

    useEffect(() => {
        const getBalance = async () => {
            const balance = await activeThirdWebToken.balanceOf(walletAddress)
            setBalance(balance.displayValue)
        }

        if (activeThirdWebToken) {
            getBalance()
        }
    }, [activeThirdWebToken])


    const sendCrypto = async (amount, recipient) => {
        console.log('A enviar crypto...')

        if (activeThirdWebToken && amount && recipient){
          setAction('transferring')
          const tx = await activeThirdWebToken.transfer(
                recipient, 
                amount.toString().concat('000000000000000000')
                )
            console.log(tx)
            setAction('transferred')

        }else {
            console.log('missing data')
        }
    }


  return (
    <Wrapper>
       <Montante>
        <FlexInputContainer>
            <FlexInput 
            placeholder='0' 
            type='number' 
            value={amount} 
            onChange={e => setAmount(e.target.value)}
            />
            <span>{selectedToken.simbolo}</span>
        </FlexInputContainer>
        <Aviso style={{ color: '' && '#0a0b0d' }}>
            Insira o montante!
        </Aviso>
       </Montante>
       <FormTransferencia>
            <Row>
                <NomeCampo>Enviar para :</NomeCampo>
                <Icon>
                    <FaWallet />
                </Icon>
                <Recipient 
                placeholder='Address'
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                />
            </Row>
            <Divisor />
            <Row>
                <NomeCampo>Pagar com</NomeCampo>
                <SelectListaMoedas onClick={() => setAction('select')}>
                    <Icon>
                        <img src={imageUrl} alt="" 
                        style={{width: "20px", height: "20px" }} />
                    </Icon>
                    <NomeMoeda>{selectedToken.nome}</NomeMoeda>
                </SelectListaMoedas>
            </Row>
       </FormTransferencia>
       <Row>
       <Continuar onClick={() => sendCrypto(amount, recipient)}>Continuar</Continuar>
       </Row>
       <Row>
        <TituloSaldo>{selectedToken.simbolo}</TituloSaldo>
        <Saldo>
            {balance} {selectedToken.simbolo}
        </Saldo>
       </Row>
    </Wrapper>
  )
}

export default Enviar


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

const FormTransferencia = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`

const Montante = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #3773f5;
  }
`

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Aviso = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`

const Divisor = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`
const NomeCampo = styled.div`
  flex: 0.5;
  padding-left: 2rem;
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
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`

const SelectListaMoedas = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`

const NomeMoeda = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`

const Continuar = styled.button`
  color: white;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background-color: #4a80f6;
  }
`

const TituloSaldo = styled.div``

const Saldo = styled.div``