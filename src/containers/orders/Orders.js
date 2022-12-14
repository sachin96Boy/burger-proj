import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../axios-orders";
import Order from "../../components/order/Order";
import Spinner from "../../components/UI/spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import { orderFetchStart } from "../../store/actions/OrderActions";

function Orders() {
  const selector = useSelector((state) => {
    return {
      orders: state.order.orders,
      loading: state.order.loading,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderFetchStart());
  }, [dispatch]);
  let orders = selector.orders?.map((order) => (
    <Order
      key={order.id}
      ingredients={order.ingredients}
      price={+order.price}
    />
  ));

  if (selector.loading) {
    orders = <Spinner />;
  }

  return <div>{orders}</div>;
}

export default WithErrorHandler(Orders, instance);
