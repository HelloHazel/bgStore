import { useStore } from '../store';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'image item item item'
    'image quantity quantity price';
  grid-gap: 1rem;
  align-items: center;
  padding: 0.5rem;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 16px;
  background-color: ${({ count }) => (count > 0 ? '#FEEEEA' : '#fff')}; /* 조건에 따라 배경색 변경 */

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 'image item item item quantity quantity price price';
  }
`;

const ImageContainer = styled.div`
  grid-area: image;
  width: 62px;
  height: 62px;
  background-color: #ccc;
`;

const ItemName = styled.h2`
  grid-area: item;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  align-self: flex-start; /* 수정: item을 위로 정렬 */
`;

const EventBadge = styled.span`
  font-size: 0.7rem;
  color: #fff;
  background-color: #ff6347;
  padding: 0.3rem 1rem;
  margin: 0 10px;
  border-radius: 50px;
`;

const QuantityContainer = styled.div`
  grid-area: quantity;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; /* 수정: quantity를 위로 정렬 */
`;

const QuantityText = styled.p`
  font-size: 1rem;
  margin: 0; /* 수정: 기본 마진 제거 */
`;

const Button = styled.button`
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: transparent;
`;

const Price = styled.div`
  grid-area: price;
  font-size: 1rem;
  align-self: center;
`;

const OrderItem = ({ id, name, price, count, event }) => {
  const { increaseQuantity, decreaseQuantity, getAllCountAndPrice } = useStore();

  const handleIncrease = () => {
    if (count < 1000) {
      increaseQuantity(id);
      getAllCountAndPrice();
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      decreaseQuantity(id);
      getAllCountAndPrice();
    }
  };

  return (
    <Container count={count}>
      <ImageContainer />
      <ItemName>
        {name}
        {event === 1 && <EventBadge>이벤트</EventBadge>}
      </ItemName>
      <QuantityContainer>
        <Button onClick={handleDecrease}>-</Button>
        <QuantityText>{count}</QuantityText>
        <Button onClick={handleIncrease}>+</Button>
      </QuantityContainer>
      <Price>{price}원</Price>
    </Container>
  );
};

export default OrderItem;
