import React, { useEffect, useState } from "react";
import instance from "../../axios-orders";
import Order from "../../components/order/Order";
import Spinner from "../../components/UI/spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

function Orders() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    instance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        setOrder(fetchedOrders);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  let orders = order?.map((order) => (
    <Order
      key={order.id}
      ingredients={order.ingredients}
      price={+order.price}
    />
  ));

  if (loading) {
    orders = <Spinner />;
  }

  return <div>{orders}</div>;
}

export default WithErrorHandler(Orders, instance);
