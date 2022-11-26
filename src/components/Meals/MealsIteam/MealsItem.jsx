import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const Mealitem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Mealitem>
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} />
      </div>
    </Mealitem>
  );
};

export default MealsItem;
