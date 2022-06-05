import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import Cart from "./Cart";

const Success = () => {

    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.products;
    const currentUser = useSelector(state => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

    useEffect(() => {

      const createOrder = async () => {
        try {

          const res = await axios.post("http://localhost:5000/api/orders", 
          {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item.quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          },
          {
            headers: {
              token: 'Bearer ' + TOKEN
            }
          }
          );
          setOrderId(res.data._id);
          
        } catch (err) {
          console.log(err)
        }
      };

      data && createOrder();
  
    }, [cart, data, currentUser])

    useEffect(() => {
      const decrementStock = () => {
        cart.products.map(item => {
          axios.get(`http://localhost:5000/api/products/find/${item._id}`)
            .then((res) => {
              console.log(res.data.inStock)
                axios.put(`http://localhost:5000/api/products/${item._id}`, {inStock: res.data.inStock - item.quantity}, {headers: {token: 'Bearer ' + TOKEN}})
                  .then(() => console.log("Inamo"));
            })
        })
      }

      data && decrementStock();

    }, [data])

    const handleClick = (e) => {
      e.preventDefault();
      navigate("/");
    }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {orderId 
              ? `Order has been created successfully. your order number is ${orderId} `
              : `Successful. Your order is being prepared...` }
      <button style={{padding: 10, marginTop: 20}} onClick={handleClick} >Go to homepage</button>
    </div>
  )
}

export default Success;