import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  // Getting the backend URL from the context API
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to verify payment
  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      // Handle error, perhaps redirect to an error page or show a message to the user
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();

    // Cleanup function
    return () => {
      // If the transaction wasn't successful, remove order data from the database
      if (!success) {
        removeOrderData();
      }
    };
  }, []);

  // Function to remove order data from the database
  const removeOrderData = async () => {
    try {
      await axios.delete(url + "/api/order/delete/" + orderId);
      console.log("Order data removed from the database.");
    } catch (error) {
      console.error("Error removing order data:", error);
    }
  };

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;

//earlier version of the code ,
/* import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success"); //to get the value of success from the link, where the site will direct user after the payment.
  const orderId = searchParams.get("orderId");

  //getting the backend url from the constest api
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify; */
