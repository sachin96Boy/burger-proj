import React from "react";

function Order(props) {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  return (
    <div className="w-4/5 border-white shadow-md p-3 my-3 mx-auto box-border">
      ingredients: {ingredients.map((ig) => {
        return (
          <span key={ig.name} className="border-2 border-white p-2 m-1">
            {ig.name} ({ig.amount})
          </span>
        );
      })}
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default Order;
