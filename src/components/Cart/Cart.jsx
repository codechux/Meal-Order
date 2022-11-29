import styled from "styled-components";
import Modal from "../UI/Modal";

const Carts = styled.div`
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .actions {
    text-align: right;
  }

  .actions button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  .actions button:hover,
  .actions button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .actions .button--alt {
    color: #8a2b06;
  }

  .actions .button {
    background-color: #8a2b06;
    color: white;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Cart = (props) => {
  const cartitems = (
    <Ul>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </Ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <Carts>
        {cartitems}
        <div className="total">
          <span>Total Amount</span>
          <span>36.56</span>
        </div>

        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>
            close
          </button>
          <button className="button">order</button>
        </div>
      </Carts>
    </Modal>
  );
};

export default Cart;
