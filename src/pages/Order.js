import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrderItem from '../components/OrderItem'
import Header from '../components/Header'
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OrderItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 40px;
  box-sizing: border-box;
`

const Footer = styled.div`
  width: 100%;
  height: 17%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  position: fixed; /* Footer를 화면 하단에 고정 */
  bottom: 0;
  left: 0;
  padding: 10px 30px;
  box-sizing: border-box;
  border-top: 1px solid #ccc; /* Semi-gray border */
  border-radius: 25px 25px 0 0; /* More rounded top corners */
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow effect */

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`

const RightAlignedContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: auto;
`

const LoadingMessage = styled.p`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
  text-align: center;
`

const Order = () => {
  const {
    items,
    isLoading,
    loadItems,
    totalCount,
    allPrice,
    getAllCountAndPrice,
  } = useStore()
  const [isSubmitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadItems()
      } catch (err) {
        console.error(err)
      }
    }

    fetchData().then(() => {
      getAllCountAndPrice()
    })
  }, [])

  const submitOrder = async () => {
    setSubmitting(true)
    //로딩 검증을 위한 3초 딜레이
    await new Promise((resolve) => setTimeout(resolve, 3000))
    if (totalCount === 0) {
      navigate('/error')
    } else {
      navigate('/complete')
    }
  }

  return (
    <Container>
      <Header />
      <OrderItemContainer>
        {isLoading ? (
          <LoadingMessage>
            목록을 <br /> 불러오고 있습니다.
          </LoadingMessage>
        ) : (
          items.map((item) => <OrderItem key={item.id} {...item} />)
        )}
      </OrderItemContainer>
      <Footer>
        <RightAlignedContent>
          <div>총 수량 : {totalCount}개</div>
          <div>총 가격 : {allPrice}원</div>
        </RightAlignedContent>

        {isSubmitting ? (
          <Button
            isLoading={true}
            onClick={submitOrder}
            disabled={isLoading}
            children={'로딩중...'}
          ></Button>
        ) : isLoading ? (
          <Button
            isLoading={true}
            onClick={submitOrder}
            disabled={isLoading}
            children={'주문하기'}
          ></Button>
        ) : (
          <Button
            isLoading={false}
            onClick={submitOrder}
            disabled={isLoading}
            children={'주문하기'}
          ></Button>
        )}
      </Footer>
    </Container>
  )
}

export default Order
