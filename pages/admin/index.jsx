import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const AdminPage = ({ orders, products, admin }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.find((order) => order._id === id);
    const currentStatus = item.status;

    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList(
        orderList.map((order) =>
          order._id === id ? { ...order, status: currentStatus + 1 } : order
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (!admin) {
    return <div>Access Denied</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>Next Stage</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <ul>
          {pizzaList.map((pizza) => (
            <li key={pizza._id}>
              {pizza.title}
              <button onClick={() => handleDelete(pizza._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  if (!admin) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const resOrders = await axios.get("http://localhost:3000/api/orders");
  const resProducts = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      orders: resOrders.data,
      products: resProducts.data,
      admin,
    },
  };
};

export default AdminPage;